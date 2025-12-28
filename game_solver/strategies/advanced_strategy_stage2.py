from __future__ import annotations

from collections import deque
from collections.abc import Generator
from dataclasses import dataclass

from game_simulation.actions import BaseAction, BuildAction, ClaimWinAction, ExtractAction, TransferAction
from game_simulation.game_types import Position, ResourceType, StructureType, TerrainType
from strategies.base_strategy import BaseStrategy, StrategyFailed


def neighbors4(x: int, y: int) -> list[tuple[int, int]]:
    return [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]


def ceil_div(a: int, b: int) -> int:
    return (a + b - 1) // b


@dataclass(frozen=True)
class ConnectionPlan:
    node_xy: Position
    road_path: list[Position]
    new_road_tiles: list[Position]
    stone_cost: int
    score: int | None = None


class AdvancedStrategy(BaseStrategy):
    """
    Stage 2 strategy (IRON_ORE + STONE):
      - 0-1 BFS to minimize incremental NEW road tiles each time.
      - For STONE goals: build profitable quarries until projected end >= goal.
      - For IRON_ORE goals:
          * CRITICAL: Build at least 2 quarries FIRST for sustained stone income
          * With 2 quarries (10 stone/turn), we can build mines every ~2 turns
          * With 1 quarry (5 stone/turn), we can only build mines every ~3-4 turns (too slow!)
      - Can build multiple structures in one turn.
    """

    ROAD_COST = 1
    RATE = 5
    STONE_QUARRY_COST = 10
    IRON_MINE_COST = 15
    
    # Minimum quarries needed for sustained mine production
    MIN_QUARRIES_FOR_IRON_GOAL = 2

    def generate_more_turn_actions(self) -> Generator[BaseAction, None, None]:
        if False:
            yield
        return

    def _get_turn_limit(self) -> int:
        td = getattr(self, "task_detail", None)
        if td is not None and getattr(td, "level", None) is not None:
            return int(td.level.max_turns)
        return int(self.game_state.max_turns)

    def _extractor_type_for_resource(self, r: ResourceType) -> StructureType:
        if r == ResourceType.STONE:
            return StructureType.STONE_QUARRY
        if r == ResourceType.IRON_ORE:
            return StructureType.IRON_MINE
        raise StrategyFailed(f"No extractor mapping for resource {r.value}")

    def _extractor_stone_cost(self, st: StructureType) -> int:
        if st == StructureType.STONE_QUARRY:
            return self.STONE_QUARRY_COST
        if st == StructureType.IRON_MINE:
            return self.IRON_MINE_COST
        raise StrategyFailed(f"Unexpected extractor type {st.value}")

    def generate_plan(self) -> None:
        board = self.game_state.board
        base = self.game_state.base
        base_xy: Position = (base.x, base.y)

        goal_resource_str, goal_amount = next(iter(self.game_state.goal.target_resources.items()))
        target_resource = ResourceType(goal_resource_str)
        goal = int(goal_amount)

        turn_limit = self._get_turn_limit()

        self.strategy.info(f"=== Strategy Start ===")
        self.strategy.info(f"Base at {base_xy}, Goal: {goal} {target_resource.value}, Turns: {turn_limit}")

        # ---------------- accounting ----------------
        base_stone = int(base.storage.get(ResourceType.STONE, 0))
        base_target = base_stone if target_resource == ResourceType.STONE else int(base.storage.get(target_resource, 0))

        self.strategy.info(f"Starting stone: {base_stone}, Starting target: {base_target}")

        def sync_target_with_stone_if_needed() -> None:
            nonlocal base_target
            if target_resource == ResourceType.STONE:
                base_target = base_stone

        def spend_stone(cost: int) -> None:
            nonlocal base_stone
            base_stone -= cost
            sync_target_with_stone_if_needed()

        def gain(res: ResourceType, amount: int) -> None:
            nonlocal base_stone, base_target
            if res == ResourceType.STONE:
                base_stone += amount
                sync_target_with_stone_if_needed()
            if target_resource != ResourceType.STONE and res == target_resource:
                base_target += amount

        def current_target_amount() -> int:
            return base_stone if target_resource == ResourceType.STONE else base_target

        # ---------------- nodes ----------------
        stone_nodes: list[Position] = [(rn.x, rn.y) for rn in board.resource_nodes if rn.resource == "STONE"]
        target_nodes: list[Position] = [(rn.x, rn.y) for rn in board.resource_nodes if rn.resource == target_resource.value]

        self.strategy.info(f"Stone nodes: {stone_nodes}")
        self.strategy.info(f"Target nodes ({target_resource.value}): {target_nodes}")

        if not stone_nodes:
            raise StrategyFailed("No STONE nodes found; cannot build roads/extractors.")
        if target_resource != ResourceType.STONE and not target_nodes:
            raise StrategyFailed(f"No {target_resource.value} nodes found.")

        resource_nodes: set[Position] = {(rn.x, rn.y) for rn in board.resource_nodes}

        def in_bounds(x: int, y: int) -> bool:
            return 0 <= x < board.width and 0 <= y < board.height

        def terrain_ok(x: int, y: int) -> bool:
            tile = board.grid[y][x]
            return tile in (TerrainType.GRASS.value, TerrainType.PLANNED_ROAD.value)

        def walk_cost(x: int, y: int, built_roads: set[Position]) -> int | None:
            p = (x, y)
            if p == base_xy:
                return 0
            if p in resource_nodes:
                return None
            if not terrain_ok(x, y):
                return None

            s = self.game_state.get_structure_at(x, y)
            if s is not None:
                return 0

            return 0 if p in built_roads else 1

        def connect_to_node(node_xy: Position, built_roads: set[Position]) -> list[Position] | None:
            goals: list[Position] = []
            nx0, ny0 = node_xy
            for gx, gy in neighbors4(nx0, ny0):
                if not in_bounds(gx, gy):
                    continue
                if (gx, gy) == base_xy:
                    continue
                c = walk_cost(gx, gy, built_roads)
                if c is None:
                    continue
                goals.append((gx, gy))

            if not goals:
                for gx, gy in neighbors4(nx0, ny0):
                    if (gx, gy) == base_xy:
                        for rx, ry in neighbors4(nx0, ny0):
                            if (rx, ry) != base_xy and in_bounds(rx, ry):
                                c = walk_cost(rx, ry, built_roads)
                                if c is not None:
                                    goals.append((rx, ry))
                                    break
                        break

            if not goals:
                return None
            goal_set = set(goals)

            dq = deque([base_xy])
            dist: dict[Position, int] = {base_xy: 0}
            prev: dict[Position, Position | None] = {base_xy: None}

            while dq:
                cx, cy = dq.popleft()
                cur = (cx, cy)

                if cur in goal_set:
                    path: list[Position] = []
                    p: Position | None = cur
                    while p is not None:
                        path.append(p)
                        p = prev[p]
                    path.reverse()
                    return path[1:]

                for nx, ny in neighbors4(cx, cy):
                    if not in_bounds(nx, ny):
                        continue
                    step = walk_cost(nx, ny, built_roads)
                    if step is None:
                        continue
                    nxt = (nx, ny)
                    nd = dist[cur] + step
                    if nxt not in dist or nd < dist[nxt]:
                        dist[nxt] = nd
                        prev[nxt] = cur
                        if step == 0:
                            dq.appendleft(nxt)
                        else:
                            dq.append(nxt)

            return None

        def get_all_connection_plans(
            candidates: list[Position],
            extractor_type: StructureType,
            built_roads: set[Position],
        ) -> list[ConnectionPlan]:
            plans = []
            extractor_cost = self._extractor_stone_cost(extractor_type)

            for node_xy in candidates:
                road_path = connect_to_node(node_xy, built_roads)
                if road_path is None:
                    continue
                new_tiles = [p for p in road_path if p not in built_roads]
                cost = len(new_tiles) * self.ROAD_COST + extractor_cost
                plans.append(ConnectionPlan(
                    node_xy=node_xy,
                    road_path=road_path,
                    new_road_tiles=new_tiles,
                    stone_cost=cost
                ))
            return plans

        def best_plan_by_cost(plans: list[ConnectionPlan], max_cost: int | None = None) -> ConnectionPlan | None:
            filtered = plans if max_cost is None else [p for p in plans if p.stone_cost <= max_cost]
            if not filtered:
                return None
            return min(filtered, key=lambda p: (p.stone_cost, len(p.new_road_tiles)))

        def best_plan_by_net_gain(
            plans: list[ConnectionPlan],
            turns_including_this: int,
            max_cost: int,
            *,
            require_positive: bool = True,
        ) -> ConnectionPlan | None:
            affordable = [p for p in plans if p.stone_cost <= max_cost]
            
            scored = []
            for p in affordable:
                score = self.RATE * turns_including_this - p.stone_cost
                if require_positive and score <= 0:
                    continue
                scored.append((p, score))
            
            if not scored:
                return None
            
            scored.sort(key=lambda x: (-x[1], x[0].stone_cost, len(x[0].new_road_tiles)))
            return scored[0][0]

        # ---------------- built state ----------------
        built_roads: set[Position] = set()
        used_stone_nodes: set[Position] = set()
        used_target_nodes: set[Position] = set()
        built_extractors: list[tuple[Position, list[Position], ResourceType]] = []

        plan: list[list[BaseAction]] = []

        def count_extractors(res: ResourceType) -> int:
            return sum(1 for _, _, r in built_extractors if r == res)

        def build_extractor_now(
            actions: list[BaseAction],
            best: ConnectionPlan,
            extractor_type: StructureType,
            res: ResourceType,
        ) -> None:
            self.strategy.info(f"  BUILD {extractor_type.value} at {best.node_xy}, cost={best.stone_cost}, stone_before={base_stone}")
            
            for (x, y) in best.road_path:
                if (x, y) in built_roads:
                    continue
                actions.append(BuildAction(x=x, y=y, structure_type=StructureType.ROAD))
                built_roads.add((x, y))
                spend_stone(self.ROAD_COST)

            actions.append(BuildAction(x=best.node_xy[0], y=best.node_xy[1], structure_type=extractor_type))
            spend_stone(self._extractor_stone_cost(extractor_type))

            transfer_path = [best.node_xy] + list(reversed(best.road_path)) + [base_xy]
            actions.append(ExtractAction(x=best.node_xy[0], y=best.node_xy[1]))
            actions.append(TransferAction(path=transfer_path, resource=res, amount=self.RATE))
            gain(res, self.RATE)

            built_extractors.append((best.node_xy, best.road_path, res))
            if res == ResourceType.STONE:
                used_stone_nodes.add(best.node_xy)
            if res == target_resource:
                used_target_nodes.add(best.node_xy)
                
            self.strategy.info(f"    After: stone={base_stone}, target={base_target}, quarries={count_extractors(ResourceType.STONE)}, mines={count_extractors(target_resource)}")

        # ================= main loop =================
        for turn_idx in range(turn_limit):
            actions: list[BaseAction] = []
            remaining_turns = turn_limit - turn_idx
            future_turns = max(0, remaining_turns - 1)

            self.strategy.info(f"--- Turn {turn_idx} (remaining={remaining_turns}) stone={base_stone} target={base_target} ---")

            # 1) Mine+transfer all existing extractors
            for node_xy, road_path, res in built_extractors:
                transfer_path = [node_xy] + list(reversed(road_path)) + [base_xy]
                actions.append(ExtractAction(x=node_xy[0], y=node_xy[1]))
                actions.append(TransferAction(path=transfer_path, resource=res, amount=self.RATE))
                gain(res, self.RATE)

            self.strategy.info(f"  After mining: stone={base_stone} target={base_target}")

            # 2) Win check
            if current_target_amount() >= goal:
                actions.append(ClaimWinAction(x=base_xy[0], y=base_xy[1]))
                plan.append(actions)
                self.plan = plan
                self.strategy.info(f"=== WIN at turn {turn_idx}! ===")
                return

            # ==========================================================
            # STONE goal
            # ==========================================================
            if target_resource == ResourceType.STONE:
                existing_quarries = count_extractors(ResourceType.STONE)
                projected_end = base_stone + existing_quarries * self.RATE * future_turns

                while projected_end < goal:
                    remaining_stones = [p for p in stone_nodes if p not in used_stone_nodes]
                    quarry_plans = get_all_connection_plans(remaining_stones, StructureType.STONE_QUARRY, built_roads)
                    
                    best_q = best_plan_by_net_gain(
                        quarry_plans,
                        turns_including_this=remaining_turns,
                        max_cost=base_stone,
                        require_positive=True,
                    )
                    
                    if best_q is None:
                        break

                    build_extractor_now(actions, best_q, StructureType.STONE_QUARRY, ResourceType.STONE)
                    existing_quarries += 1
                    projected_end = base_stone + existing_quarries * self.RATE * future_turns

                    if current_target_amount() >= goal:
                        break

                plan.append(actions)
                continue

            # ==========================================================
            # NON-STONE goal (IRON_ORE)
            # ==========================================================
            target_extractor = self._extractor_type_for_resource(target_resource)

            quarries = count_extractors(ResourceType.STONE)
            mines = count_extractors(target_resource)
            
            projected_iron = base_target + mines * self.RATE * future_turns
            
            self.strategy.info(f"  Quarries={quarries}, Mines={mines}, Projected iron={projected_iron}")

            # Build loop
            iteration = 0
            max_iterations = 50

            while iteration < max_iterations:
                iteration += 1
                
                quarries = count_extractors(ResourceType.STONE)
                mines = count_extractors(target_resource)
                projected_iron = base_target + mines * self.RATE * future_turns
                
                if projected_iron >= goal:
                    self.strategy.info(f"  Projected {projected_iron} >= goal {goal}, stopping builds")
                    break

                remaining_targets = [p for p in target_nodes if p not in used_target_nodes]
                remaining_stones = [p for p in stone_nodes if p not in used_stone_nodes]
                
                mine_plans = get_all_connection_plans(remaining_targets, target_extractor, built_roads)
                quarry_plans = get_all_connection_plans(remaining_stones, StructureType.STONE_QUARRY, built_roads)
                
                best_mine = best_plan_by_cost(mine_plans)
                best_quarry = best_plan_by_cost(quarry_plans)
                
                self.strategy.info(f"  Iter {iteration}: stone={base_stone}, quarries={quarries}, mines={mines}")
                if best_mine:
                    self.strategy.info(f"    Best mine: {best_mine.node_xy} cost={best_mine.stone_cost}")
                if best_quarry:
                    self.strategy.info(f"    Best quarry: {best_quarry.node_xy} cost={best_quarry.stone_cost}")

                # ==========================================================
                # PHASE 1: Ensure we have minimum quarries for sustained income
                # With <2 quarries, we can't build mines fast enough!
                # ==========================================================
                if quarries < self.MIN_QUARRIES_FOR_IRON_GOAL and remaining_stones:
                    self.strategy.info(f"    PHASE 1: Need {self.MIN_QUARRIES_FOR_IRON_GOAL} quarries, have {quarries}")
                    
                    if best_quarry is not None and base_stone >= best_quarry.stone_cost:
                        build_extractor_now(actions, best_quarry, StructureType.STONE_QUARRY, ResourceType.STONE)
                        continue
                    else:
                        # Can't afford quarry yet, wait for income
                        self.strategy.info(f"    Can't afford quarry ({best_quarry.stone_cost if best_quarry else 'N/A'}), waiting")
                        break

                # ==========================================================
                # PHASE 2: Build mines (we have enough quarries now)
                # ==========================================================
                if best_mine is not None and base_stone >= best_mine.stone_cost:
                    self.strategy.info(f"    PHASE 2: Building mine")
                    build_extractor_now(actions, best_mine, target_extractor, target_resource)
                    continue

                # ==========================================================
                # PHASE 3: Can't afford mine, build more quarries if helpful
                # ==========================================================
                if best_mine is not None and remaining_stones:
                    self.strategy.info(f"    PHASE 3: Can't afford mine ({best_mine.stone_cost}), looking for quarry")
                    
                    # Build quarry if affordable and will help
                    affordable_quarry = best_plan_by_cost(quarry_plans, base_stone)
                    if affordable_quarry is not None:
                        # Check if quarry is worth it (will we have enough turns to benefit?)
                        stone_after_quarry = base_stone - affordable_quarry.stone_cost + self.RATE
                        turns_to_afford_mine = ceil_div(best_mine.stone_cost - stone_after_quarry, (quarries + 1) * self.RATE) if best_mine.stone_cost > stone_after_quarry else 0
                        
                        # Only build quarry if we'll still have time to build mines and benefit
                        if turns_to_afford_mine < remaining_turns - 2:
                            build_extractor_now(actions, affordable_quarry, StructureType.STONE_QUARRY, ResourceType.STONE)
                            continue
                    
                    self.strategy.info(f"    No beneficial quarry, waiting for income")

                break

            # Check win at end of turn
            if current_target_amount() >= goal:
                actions.append(ClaimWinAction(x=base_xy[0], y=base_xy[1]))
                plan.append(actions)
                self.plan = plan
                self.strategy.info(f"=== WIN at turn {turn_idx}! ===")
                return

            plan.append(actions)

        raise StrategyFailed(
            f"Could not reach {target_resource.value} {goal} within turn_limit={turn_limit} "
            f"(ended with {current_target_amount()})."
        )