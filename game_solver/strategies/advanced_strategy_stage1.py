from __future__ import annotations

from collections import deque
from collections.abc import Generator
from dataclasses import dataclass

from game_simulation.actions import (
    BaseAction,
    BuildAction,
    ClaimWinAction,
    ExtractAction,
    TransferAction,
)
from game_simulation.game_types import ResourceType, StructureType, TerrainType, Position
from strategies.base_strategy import BaseStrategy, StrategyFailed


def neighbors4(x: int, y: int) -> list[tuple[int, int]]:
    return [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]


@dataclass(frozen=True)
class ConnectionPlan:
    stone_xy: Position
    road_path: list[Position]      # road tiles from base outward (excludes base)
    new_road_tiles: list[Position] # subset of road_path not already built
    cost: int                      # new roads*1 + quarry*10
    net_gain: int                  # expected gain over remaining turns


class AdvancedStrategy(BaseStrategy):
    """
    Stage 1 multi-quarry strategy, robust under low turn limits.

    Key improvements vs "static BFS per node":
      - Each time we consider a new quarry, we compute the MINIMUM *incremental*
        roads needed given the currently built road network (0-1 BFS).
      - This allows trunk/branch sharing and is often necessary for goals like
        75 within 9 turns.

    Avoids BaseStrategy.ACTION_LOOP_LIMIT by using generate_plan().
    """

    ROAD_COST = 1
    QUARRY_COST = 10
    RATE = 5

    # ----- required abstract method (unused) -----
    def generate_more_turn_actions(self) -> Generator[BaseAction, None, None]:  # type: ignore[override]
        if False:
            yield
        return

    def _get_turn_limit(self) -> int:
        td = getattr(self, "task_detail", None)
        if td is not None and getattr(td, "level", None) is not None:
            lvl = td.level
            for attr in ("turn_limit", "max_turns", "turns"):
                if hasattr(lvl, attr) and getattr(lvl, attr) is not None:
                    return int(getattr(lvl, attr))

        lvl2 = getattr(self.game_state, "level", None)
        if lvl2 is not None:
            for attr in ("turn_limit", "max_turns", "turns"):
                if hasattr(lvl2, attr) and getattr(lvl2, attr) is not None:
                    return int(getattr(lvl2, attr))

        return 20

    def generate_plan(self) -> None:
        board = self.game_state.board
        base = self.game_state.base
        base_xy: Position = (base.x, base.y)

        goal = int(self.game_state.goal_resources.get(ResourceType.STONE, 0))
        base_stone = int(base.storage.get(ResourceType.STONE, 0))
        turn_limit = self._get_turn_limit()

        stone_nodes: list[Position] = [(rn.x, rn.y) for rn in board.resource_nodes if rn.resource == "STONE"]
        if not stone_nodes:
            raise StrategyFailed("No STONE nodes found")

        resource_nodes: set[Position] = {(rn.x, rn.y) for rn in board.resource_nodes}

        def in_bounds(x: int, y: int) -> bool:
            return 0 <= x < board.width and 0 <= y < board.height

        def terrain_ok(x: int, y: int) -> bool:
            tile = board.grid[y][x]
            return tile in (TerrainType.GRASS.value, TerrainType.PLANNED_ROAD.value)

        def walk_cost(x: int, y: int, built_roads: set[Position]) -> int | None:
            """
            Cost to traverse this tile in 0-1 BFS:
              - base: 0
              - already-built road: 0
              - buildable road tile: 1 (we'd build a road)
              - else: None (impassable)
            """
            p = (x, y)
            if p == base_xy:
                return 0
            if p in resource_nodes:
                return None
            if not terrain_ok(x, y):
                return None
            # if an initial structure is here, block (except base)
            s = self.game_state.get_structure_at(x, y)
            if s is not None:
                # If it's already a road (from earlier in level), you can traverse at 0.
                # But Stage 1 starts with only BASE.
                return 0
            return 0 if p in built_roads else 1

        def connect_to_stone(stone_xy: Position, built_roads: set[Position]) -> list[Position] | None:
            """
            0-1 BFS from base to ANY neighbor of stone_xy.
            Returns full road path excluding base (i.e., tiles where roads must exist).
            """
            goals = []
            sx, sy = stone_xy
            for gx, gy in neighbors4(sx, sy):
                if not in_bounds(gx, gy):
                    continue
                c = walk_cost(gx, gy, built_roads)
                if c is None:
                    continue
                goals.append((gx, gy))
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
                    # reconstruct path base->goal
                    path: list[Position] = []
                    p: Position | None = cur
                    while p is not None:
                        path.append(p)
                        p = prev[p]
                    path.reverse()
                    # exclude base itself; remaining are road tiles
                    return path[1:]

                for nx, ny in neighbors4(cx, cy):
                    if not in_bounds(nx, ny):
                        continue
                    step_cost = walk_cost(nx, ny, built_roads)
                    if step_cost is None:
                        continue
                    nxt = (nx, ny)
                    nd = dist[cur] + step_cost
                    if nxt not in dist or nd < dist[nxt]:
                        dist[nxt] = nd
                        prev[nxt] = cur
                        if step_cost == 0:
                            dq.appendleft(nxt)
                        else:
                            dq.append(nxt)

            return None

        used_nodes: set[Position] = set()
        built_roads: set[Position] = set()
        built_quarries: list[tuple[Position, list[Position]]] = []  # (stone_xy, road_path)

        plan: list[list[BaseAction]] = []

        for turn_idx in range(turn_limit):
            actions: list[BaseAction] = []
            remaining_turns_including_this = turn_limit - turn_idx

            # (1) Mine+transfer existing quarries
            for stone_xy, road_path in built_quarries:
                transfer_path = [stone_xy] + list(reversed(road_path)) + [base_xy]
                actions.append(ExtractAction(x=stone_xy[0], y=stone_xy[1]))
                actions.append(TransferAction(path=transfer_path, resource=ResourceType.STONE, amount=self.RATE))
                base_stone += self.RATE

            if base_stone >= goal:
                actions.append(ClaimWinAction(x=base_xy[0], y=base_xy[1]))
                plan.append(actions)
                self.plan = plan
                return

            # (2) Build additional quarries while budget allows and it helps
            while True:
                best: ConnectionPlan | None = None

                for stone_xy in stone_nodes:
                    if stone_xy in used_nodes:
                        continue

                    road_path = connect_to_stone(stone_xy, built_roads)
                    if road_path is None:
                        continue

                    new_tiles = [p for p in road_path if p not in built_roads]
                    new_roads_cost = len(new_tiles) * self.ROAD_COST
                    total_cost = new_roads_cost + self.QUARRY_COST

                    if base_stone < total_cost:
                        continue

                    # If we build now, we can mine immediately this turn and each remaining turn:
                    expected_yield = self.RATE * remaining_turns_including_this
                    net_gain = expected_yield - total_cost
                    if net_gain <= 0:
                        continue

                    cand = ConnectionPlan(
                        stone_xy=stone_xy,
                        road_path=road_path,
                        new_road_tiles=new_tiles,
                        cost=total_cost,
                        net_gain=net_gain,
                    )
                    if best is None or (cand.net_gain, -len(cand.new_road_tiles)) > (best.net_gain, -len(best.new_road_tiles)):
                        best = cand

                if best is None:
                    break

                # Build new roads in order along the chosen road_path (adjacency holds)
                for (x, y) in best.road_path:
                    if (x, y) in built_roads:
                        continue
                    actions.append(BuildAction(x=x, y=y, structure_type=StructureType.ROAD))
                    built_roads.add((x, y))
                    base_stone -= self.ROAD_COST

                # Build quarry
                actions.append(BuildAction(x=best.stone_xy[0], y=best.stone_xy[1], structure_type=StructureType.STONE_QUARRY))
                base_stone -= self.QUARRY_COST

                # Mine+transfer immediately this turn
                transfer_path = [best.stone_xy] + list(reversed(best.road_path)) + [base_xy]
                actions.append(ExtractAction(x=best.stone_xy[0], y=best.stone_xy[1]))
                actions.append(TransferAction(path=transfer_path, resource=ResourceType.STONE, amount=self.RATE))
                base_stone += self.RATE

                built_quarries.append((best.stone_xy, best.road_path))
                used_nodes.add(best.stone_xy)

                if base_stone >= goal:
                    actions.append(ClaimWinAction(x=base_xy[0], y=base_xy[1]))
                    plan.append(actions)
                    self.plan = plan
                    return

            plan.append(actions)

        raise StrategyFailed(f"Could not reach Stone {goal} within turn_limit={turn_limit}")