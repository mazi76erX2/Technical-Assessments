from __future__ import annotations

from collections import deque
from collections.abc import Generator
from dataclasses import dataclass

from game_simulation.actions import (
    BaseAction,
    BuildAction,
    ClaimWinAction,
    ExtractAction,
    ProduceAction,
    TransferAction,
)
from game_simulation.game_types import (
    Position,
    ResourceType,
    StructureType,
    TerrainType,
)
from strategies.base_strategy import BaseStrategy, StrategyFailed


def neighbors4(x: int, y: int) -> list[tuple[int, int]]:
    return [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]


def ceil_div(a: int, b: int) -> int:
    if b <= 0:
        return 999999
    return (a + b - 1) // b


@dataclass
class InfraInfo:
    position: Position
    road_path: list[Position]
    cost: int


@dataclass
class SmelterInfo:
    position: Position
    mine_pos: Position
    path_from_mine: list[Position]
    path_to_base: list[Position]


class AdvancedStrategy(BaseStrategy):
    """
    Aggressive greedy strategy optimized for IRON goals.

    Key optimizations:
    1. Build multiple quarries early for fast stone income
    2. Rush mine+smelter pairs ASAP
    3. Add extra smelters to fully utilize ore (5 ore needs 3 smelters)
    """

    ROAD_COST = 1
    EXTRACTION_RATE = 5
    SMELTER_RATE = 2

    STONE_QUARRY_COST = 10
    IRON_MINE_COST = 15
    SMELTER_COST = 20

    MIN_PATH_LENGTH = 3
    MAX_SMELTERS_PER_MINE = 3  # 5 ore / 2 rate = 2.5, so 3 smelters can use all ore

    def generate_more_turn_actions(self) -> Generator[BaseAction, None, None]:
        if False:
            yield
        return

    def _get_turn_limit(self) -> int:
        td = getattr(self, "task_detail", None)
        if td is not None and getattr(td, "level", None) is not None:
            return int(td.level.max_turns)
        return int(self.game_state.max_turns)

    def generate_plan(self) -> None:
        board = self.game_state.board
        base = self.game_state.base
        base_xy: Position = (base.x, base.y)

        goal_resource_str, goal_amount = next(
            iter(self.game_state.goal.target_resources.items())
        )
        target_resource = ResourceType(goal_resource_str)
        goal = int(goal_amount)
        turn_limit = self._get_turn_limit()

        is_iron_goal = target_resource == ResourceType.IRON
        is_iron_ore_goal = target_resource == ResourceType.IRON_ORE
        is_stone_goal = target_resource == ResourceType.STONE

        self.strategy.info(f"=== Aggressive Greedy Strategy ===")
        self.strategy.info(
            f"Goal: {goal} {target_resource.value} in {turn_limit} turns"
        )

        # ============== Map Analysis ==============
        stone_nodes: list[Position] = [
            (rn.x, rn.y) for rn in board.resource_nodes if rn.resource == "STONE"
        ]
        iron_ore_nodes: list[Position] = [
            (rn.x, rn.y) for rn in board.resource_nodes if rn.resource == "IRON_ORE"
        ]
        resource_node_set: set[Position] = set(stone_nodes) | set(iron_ore_nodes)

        if not stone_nodes:
            raise StrategyFailed("No STONE nodes found")
        if is_iron_goal and not iron_ore_nodes:
            raise StrategyFailed("IRON goal but no IRON_ORE nodes")

        # ============== Pre-calculate iron requirements ==============
        if is_iron_goal:
            smelter_turns_needed = ceil_div(goal, self.SMELTER_RATE)
            # How many production turns do we have if we start by turn X?
            # We want to find minimum smelters needed
            # With N smelters for T turns: N * T >= smelter_turns_needed
            # Estimate: aim for production by turn 5-6
            target_start_turn = min(6, turn_limit // 3)
            available_turns = turn_limit - target_start_turn
            min_smelters = ceil_div(smelter_turns_needed, max(1, available_turns))
            min_mines = ceil_div(min_smelters, self.MAX_SMELTERS_PER_MINE)

            self.strategy.info(f"Need {smelter_turns_needed} smelter-turns")
            self.strategy.info(
                f"Target: {min_smelters} smelters, {min_mines} mines by turn {target_start_turn}"
            )

        # ============== Pathfinding ==============
        def in_bounds(x: int, y: int) -> bool:
            return 0 <= x < board.width and 0 <= y < board.height

        def terrain_ok(x: int, y: int) -> bool:
            tile = board.grid[y][x]
            return tile in (TerrainType.GRASS.value, TerrainType.PLANNED_ROAD.value)

        def bfs_road_path(
            target: Position, roads: set[Position], blocked: set[Position]
        ) -> tuple[list[Position], int] | None:
            """0-1 BFS to find path from base to adjacent tile of target."""
            goals = set()
            for nx, ny in neighbors4(target[0], target[1]):
                pos = (nx, ny)
                if pos == base_xy:
                    continue
                if pos in blocked or pos in resource_node_set:
                    continue
                if not in_bounds(nx, ny) or not terrain_ok(nx, ny):
                    continue
                goals.add(pos)

            if not goals:
                return None

            dq: deque[Position] = deque([base_xy])
            dist = {base_xy: 0}
            prev: dict[Position, Position | None] = {base_xy: None}

            while dq:
                cur = dq.popleft()
                if cur in goals:
                    path = []
                    p = cur
                    while p is not None and p != base_xy:
                        path.append(p)
                        p = prev[p]
                    path.reverse()

                    if len(path) < 1:
                        goals.discard(cur)
                        continue

                    new_cost = sum(1 for p in path if p not in roads)
                    return (path, new_cost * self.ROAD_COST)

                for nx, ny in neighbors4(cur[0], cur[1]):
                    npos = (nx, ny)
                    if npos in blocked or npos in resource_node_set:
                        continue
                    if not in_bounds(nx, ny) or not terrain_ok(nx, ny):
                        continue

                    step = 0 if npos in roads else 1
                    nd = dist[cur] + step
                    if npos not in dist or nd < dist[npos]:
                        dist[npos] = nd
                        prev[npos] = cur
                        if step == 0:
                            dq.appendleft(npos)
                        else:
                            dq.append(npos)

            return None

        def bfs_transfer_path(
            start: Position, end: Position, roads: set[Position]
        ) -> list[Position] | None:
            """Find transfer path of length >= 3."""
            if start == end:
                return None

            dq: deque[Position] = deque([start])
            prev: dict[Position, Position | None] = {start: None}
            visited = {start}

            while dq:
                cur = dq.popleft()
                if cur == end:
                    path = []
                    p = cur
                    while p is not None:
                        path.append(p)
                        p = prev[p]
                    path.reverse()
                    if len(path) >= self.MIN_PATH_LENGTH:
                        return path
                    return None

                for nx, ny in neighbors4(cur[0], cur[1]):
                    npos = (nx, ny)
                    if npos in visited:
                        continue
                    if npos == end or npos in roads or npos == base_xy:
                        visited.add(npos)
                        prev[npos] = cur
                        dq.append(npos)

            return None

        def find_smelter_spot(
            mine_pos: Position,
            mine_road_path: list[Position],
            roads: set[Position],
            blocked: set[Position],
        ) -> tuple[Position, list[Position], list[Position]] | None:
            """Find smelter position with valid paths (length >= 3)."""
            base_adjacent = set(neighbors4(base_xy[0], base_xy[1]))
            mine_adjacent = set(neighbors4(mine_pos[0], mine_pos[1]))

            candidates = []
            for road_pos in mine_road_path:
                for nx, ny in neighbors4(road_pos[0], road_pos[1]):
                    spos = (nx, ny)
                    if spos == base_xy or spos == mine_pos:
                        continue
                    if spos in resource_node_set:
                        continue
                    if spos in roads or spos in blocked:
                        continue
                    if spos in mine_road_path:
                        continue
                    if not in_bounds(nx, ny) or not terrain_ok(nx, ny):
                        continue
                    if spos in base_adjacent or spos in mine_adjacent:
                        continue
                    candidates.append((spos, road_pos))

            for spos, adj_road in candidates:
                path_from_mine = bfs_transfer_path(
                    mine_pos, spos, roads | set(mine_road_path)
                )
                if path_from_mine is None or len(path_from_mine) < self.MIN_PATH_LENGTH:
                    continue

                path_to_base = bfs_transfer_path(
                    spos, base_xy, roads | set(mine_road_path)
                )
                if path_to_base is None or len(path_to_base) < self.MIN_PATH_LENGTH:
                    continue

                return (spos, path_from_mine, path_to_base)

            return None

        # ============== Sorted getters ==============
        def get_sorted_quarries(
            roads: set[Position], blocked: set[Position]
        ) -> list[tuple[Position, list[Position], int]]:
            result = []
            for node in stone_nodes:
                if node in blocked:
                    continue
                r = bfs_road_path(node, roads, blocked)
                if r:
                    path, road_cost = r
                    if len(path) >= 1:
                        total = road_cost + self.STONE_QUARRY_COST
                        result.append((node, path, total))
            result.sort(key=lambda x: x[2])
            return result

        def get_sorted_mines(
            roads: set[Position], blocked: set[Position]
        ) -> list[tuple[Position, list[Position], int]]:
            result = []
            for node in iron_ore_nodes:
                if node in blocked:
                    continue
                r = bfs_road_path(node, roads, blocked)
                if r:
                    path, road_cost = r
                    if len(path) >= 1:
                        total = road_cost + self.IRON_MINE_COST
                        result.append((node, path, total))
            result.sort(key=lambda x: x[2])
            return result

        # ============== State ==============
        roads: set[Position] = set()
        stone = int(base.storage.get(ResourceType.STONE, 0))
        target_amount = int(base.storage.get(target_resource, 0))

        quarries: list[InfraInfo] = []
        mines: list[InfraInfo] = []
        smelters: list[SmelterInfo] = []

        used_nodes: set[Position] = set()
        plan: list[list[BaseAction]] = []

        def all_structures() -> set[Position]:
            s = {q.position for q in quarries}
            s |= {m.position for m in mines}
            s |= {sm.position for sm in smelters}
            return s

        def get_mine_smelters(mine_pos: Position) -> list[SmelterInfo]:
            return [s for s in smelters if s.mine_pos == mine_pos]

        def unpaired_mines() -> list[InfraInfo]:
            return [m for m in mines if len(get_mine_smelters(m.position)) == 0]

        def undersmeltered_mines() -> list[InfraInfo]:
            """Mines that could use more smelters (< MAX)."""
            return [
                m
                for m in mines
                if len(get_mine_smelters(m.position)) < self.MAX_SMELTERS_PER_MINE
            ]

        def total_iron_per_turn() -> int:
            """Calculate max iron production per turn with current infrastructure."""
            total = 0
            for m in mines:
                m_smelters = get_mine_smelters(m.position)
                # Each smelter can process SMELTER_RATE ore, mine produces EXTRACTION_RATE
                ore_used = min(
                    len(m_smelters) * self.SMELTER_RATE, self.EXTRACTION_RATE
                )
                total += ore_used
            return total

        # ============== Main Loop ==============
        for turn in range(turn_limit):
            actions: list[BaseAction] = []
            remaining = turn_limit - turn

            # ===== WIN CHECK =====
            if target_amount >= goal:
                actions.append(ClaimWinAction(x=base_xy[0], y=base_xy[1]))
                plan.append(actions)
                self.plan = plan
                return

            # ===== PRODUCTION =====

            # Quarries
            for q in quarries:
                actions.append(ExtractAction(x=q.position[0], y=q.position[1]))
                path = [q.position] + list(reversed(q.road_path)) + [base_xy]
                actions.append(
                    TransferAction(
                        path=path,
                        resource=ResourceType.STONE,
                        amount=self.EXTRACTION_RATE,
                    )
                )
                stone += self.EXTRACTION_RATE
                if is_stone_goal:
                    target_amount = stone

            # Iron ore goal
            if is_iron_ore_goal:
                for m in mines:
                    actions.append(ExtractAction(x=m.position[0], y=m.position[1]))
                    path = [m.position] + list(reversed(m.road_path)) + [base_xy]
                    actions.append(
                        TransferAction(
                            path=path,
                            resource=ResourceType.IRON_ORE,
                            amount=self.EXTRACTION_RATE,
                        )
                    )
                    target_amount += self.EXTRACTION_RATE

            # Iron goal - optimized ore distribution
            if is_iron_goal:
                for m in mines:
                    m_smelters = get_mine_smelters(m.position)
                    if not m_smelters:
                        continue

                    actions.append(ExtractAction(x=m.position[0], y=m.position[1]))
                    ore_available = self.EXTRACTION_RATE

                    for sm in m_smelters:
                        ore_to_use = min(ore_available, self.SMELTER_RATE)
                        if ore_to_use <= 0:
                            break

                        actions.append(
                            TransferAction(
                                path=sm.path_from_mine,
                                resource=ResourceType.IRON_ORE,
                                amount=ore_to_use,
                            )
                        )
                        actions.append(
                            ProduceAction(x=sm.position[0], y=sm.position[1])
                        )
                        actions.append(
                            TransferAction(
                                path=sm.path_to_base,
                                resource=ResourceType.IRON,
                                amount=ore_to_use,
                            )
                        )
                        target_amount += ore_to_use
                        ore_available -= ore_to_use

            # ===== WIN CHECK AFTER PRODUCTION =====
            if target_amount >= goal:
                actions.append(ClaimWinAction(x=base_xy[0], y=base_xy[1]))
                plan.append(actions)
                self.plan = plan
                return

            # ===== BUILD PHASE =====
            for _ in range(15):  # More iterations for aggressive building
                made_progress = False
                structs = all_structures()

                avail_quarries = get_sorted_quarries(roads, structs | used_nodes)
                avail_mines = get_sorted_mines(roads, structs | used_nodes)

                num_quarries = len(quarries)
                num_smelters = len(smelters)
                num_mines = len(mines)

                # ===== STONE GOAL =====
                if is_stone_goal:
                    projected = target_amount + num_quarries * self.EXTRACTION_RATE * (
                        remaining - 1
                    )
                    if projected < goal and avail_quarries:
                        best = avail_quarries[0]
                        if stone >= best[2]:
                            node, path, cost = best
                            for p in path:
                                if p not in roads:
                                    actions.append(
                                        BuildAction(
                                            x=p[0],
                                            y=p[1],
                                            structure_type=StructureType.ROAD,
                                        )
                                    )
                                    roads.add(p)
                            actions.append(
                                BuildAction(
                                    x=node[0],
                                    y=node[1],
                                    structure_type=StructureType.STONE_QUARRY,
                                )
                            )
                            stone -= cost

                            actions.append(ExtractAction(x=node[0], y=node[1]))
                            t_path = [node] + list(reversed(path)) + [base_xy]
                            actions.append(
                                TransferAction(
                                    path=t_path,
                                    resource=ResourceType.STONE,
                                    amount=self.EXTRACTION_RATE,
                                )
                            )
                            stone += self.EXTRACTION_RATE
                            target_amount = stone

                            quarries.append(
                                InfraInfo(position=node, road_path=path, cost=cost)
                            )
                            used_nodes.add(node)
                            made_progress = True
                            continue
                    break

                # ===== IRON ORE GOAL =====
                if is_iron_ore_goal:
                    if num_quarries == 0 and avail_quarries:
                        best = avail_quarries[0]
                        if stone >= best[2]:
                            node, path, cost = best
                            for p in path:
                                if p not in roads:
                                    actions.append(
                                        BuildAction(
                                            x=p[0],
                                            y=p[1],
                                            structure_type=StructureType.ROAD,
                                        )
                                    )
                                    roads.add(p)
                            actions.append(
                                BuildAction(
                                    x=node[0],
                                    y=node[1],
                                    structure_type=StructureType.STONE_QUARRY,
                                )
                            )
                            stone -= cost
                            actions.append(ExtractAction(x=node[0], y=node[1]))
                            t_path = [node] + list(reversed(path)) + [base_xy]
                            actions.append(
                                TransferAction(
                                    path=t_path,
                                    resource=ResourceType.STONE,
                                    amount=self.EXTRACTION_RATE,
                                )
                            )
                            stone += self.EXTRACTION_RATE
                            quarries.append(
                                InfraInfo(position=node, road_path=path, cost=cost)
                            )
                            used_nodes.add(node)
                            made_progress = True
                            continue

                    projected = target_amount + num_mines * self.EXTRACTION_RATE * (
                        remaining - 1
                    )
                    if projected < goal and avail_mines:
                        best = avail_mines[0]
                        if stone >= best[2]:
                            node, path, cost = best
                            for p in path:
                                if p not in roads:
                                    actions.append(
                                        BuildAction(
                                            x=p[0],
                                            y=p[1],
                                            structure_type=StructureType.ROAD,
                                        )
                                    )
                                    roads.add(p)
                            actions.append(
                                BuildAction(
                                    x=node[0],
                                    y=node[1],
                                    structure_type=StructureType.IRON_MINE,
                                )
                            )
                            stone -= cost
                            mines.append(
                                InfraInfo(position=node, road_path=path, cost=cost)
                            )
                            used_nodes.add(node)
                            made_progress = True
                            continue
                    break

                # ===== IRON GOAL - AGGRESSIVE =====
                if is_iron_goal:
                    iron_per_turn = total_iron_per_turn()
                    prod_turns_left = max(0, remaining - 1)
                    projected = target_amount + iron_per_turn * prod_turns_left
                    needed = goal - target_amount

                    self.strategy.debug(
                        f"Turn {turn}: iron/turn={iron_per_turn}, projected={projected}, needed={needed}"
                    )

                    # PRIORITY 1: Complete unpaired mines IMMEDIATELY
                    unp = unpaired_mines()
                    if unp and stone >= self.SMELTER_COST:
                        mine = unp[0]
                        result = find_smelter_spot(
                            mine.position, mine.road_path, roads, structs
                        )
                        if result:
                            s_pos, path_from, path_to = result
                            actions.append(
                                BuildAction(
                                    x=s_pos[0],
                                    y=s_pos[1],
                                    structure_type=StructureType.SMELTER,
                                )
                            )
                            stone -= self.SMELTER_COST
                            smelters.append(
                                SmelterInfo(
                                    position=s_pos,
                                    mine_pos=mine.position,
                                    path_from_mine=path_from,
                                    path_to_base=path_to,
                                )
                            )
                            made_progress = True
                            continue

                    # PRIORITY 2: Build mine+smelter if projected < goal
                    if projected < goal and avail_mines:
                        for mine_node, mine_path, mine_cost in avail_mines:
                            full_cost = mine_cost + self.SMELTER_COST
                            if stone < full_cost:
                                continue

                            test_roads = roads | set(mine_path)
                            test_blocked = structs | {mine_node}
                            result = find_smelter_spot(
                                mine_node, mine_path, test_roads, test_blocked
                            )
                            if not result:
                                continue

                            s_pos, path_from, path_to = result

                            for p in mine_path:
                                if p not in roads:
                                    actions.append(
                                        BuildAction(
                                            x=p[0],
                                            y=p[1],
                                            structure_type=StructureType.ROAD,
                                        )
                                    )
                                    roads.add(p)

                            actions.append(
                                BuildAction(
                                    x=mine_node[0],
                                    y=mine_node[1],
                                    structure_type=StructureType.IRON_MINE,
                                )
                            )
                            mines.append(
                                InfraInfo(
                                    position=mine_node,
                                    road_path=mine_path,
                                    cost=mine_cost,
                                )
                            )
                            used_nodes.add(mine_node)
                            stone -= mine_cost

                            actions.append(
                                BuildAction(
                                    x=s_pos[0],
                                    y=s_pos[1],
                                    structure_type=StructureType.SMELTER,
                                )
                            )
                            stone -= self.SMELTER_COST
                            smelters.append(
                                SmelterInfo(
                                    position=s_pos,
                                    mine_pos=mine_node,
                                    path_from_mine=path_from,
                                    path_to_base=path_to,
                                )
                            )
                            made_progress = True
                            break

                        if made_progress:
                            continue

                    # PRIORITY 3: Add more smelters to existing mines (up to MAX_SMELTERS_PER_MINE)
                    # This helps utilize all 5 ore (5 ore / 2 per smelter = need 3 smelters)
                    if projected < goal:
                        under = undersmeltered_mines()
                        if under and stone >= self.SMELTER_COST:
                            mine = under[0]
                            existing = {s.position for s in smelters}
                            result = find_smelter_spot(
                                mine.position, mine.road_path, roads, structs | existing
                            )
                            if result:
                                s_pos, path_from, path_to = result
                                actions.append(
                                    BuildAction(
                                        x=s_pos[0],
                                        y=s_pos[1],
                                        structure_type=StructureType.SMELTER,
                                    )
                                )
                                stone -= self.SMELTER_COST
                                smelters.append(
                                    SmelterInfo(
                                        position=s_pos,
                                        mine_pos=mine.position,
                                        path_from_mine=path_from,
                                        path_to_base=path_to,
                                    )
                                )
                                made_progress = True
                                continue

                    # PRIORITY 4: Build quarries for stone income
                    # Be more aggressive: build 2 quarries early, or build when we can't afford mine+smelter
                    need_quarry = False

                    if num_quarries == 0:
                        need_quarry = True
                    elif num_quarries < 2 and turn < 3:
                        # Aggressive: build 2nd quarry in first 3 turns
                        need_quarry = True
                    elif projected < goal:
                        # Need more income to build infrastructure
                        min_mine_cost = avail_mines[0][2] if avail_mines else 999
                        if stone < min_mine_cost + self.SMELTER_COST:
                            need_quarry = True

                    if need_quarry and avail_quarries:
                        best = avail_quarries[0]
                        if stone >= best[2]:
                            node, path, cost = best
                            for p in path:
                                if p not in roads:
                                    actions.append(
                                        BuildAction(
                                            x=p[0],
                                            y=p[1],
                                            structure_type=StructureType.ROAD,
                                        )
                                    )
                                    roads.add(p)
                            actions.append(
                                BuildAction(
                                    x=node[0],
                                    y=node[1],
                                    structure_type=StructureType.STONE_QUARRY,
                                )
                            )
                            stone -= cost

                            actions.append(ExtractAction(x=node[0], y=node[1]))
                            t_path = [node] + list(reversed(path)) + [base_xy]
                            actions.append(
                                TransferAction(
                                    path=t_path,
                                    resource=ResourceType.STONE,
                                    amount=self.EXTRACTION_RATE,
                                )
                            )
                            stone += self.EXTRACTION_RATE

                            quarries.append(
                                InfraInfo(position=node, road_path=path, cost=cost)
                            )
                            used_nodes.add(node)
                            made_progress = True
                            continue

                    break

                if not made_progress:
                    break

            plan.append(actions)

        raise StrategyFailed(
            f"Could not reach {target_resource.value} {goal} within {turn_limit} turns "
            f"(ended with {target_amount})"
        )
