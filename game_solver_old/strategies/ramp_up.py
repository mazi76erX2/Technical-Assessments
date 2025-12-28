"""Minimal ramp-up strategy built for quick developer tests."""

from __future__ import annotations

from collections import deque
from collections.abc import Generator

from game_simulation.actions import (
    BaseAction,
    BuildAction,
    ClaimWinAction,
    ExtractAction,
    TransferAction,
)
from game_simulation.game_types import ResourceType, StructureType, TerrainType

from strategies.base_strategy import BaseStrategy


class RampUpStrategy(BaseStrategy):
    """Strategy that builds roads from base to quarry, then mines stone."""

    def __init__(self, game_state):
        super().__init__(game_state)

        board = self.game_state.board
        base = self.game_state.base

        self._base_pos = (base.x, base.y)

        # Find the closest stone node
        stone_nodes = [
            node for node in board.resource_nodes if node.resource == "STONE"
        ]
        best_node = None
        best_path = None
        for node in stone_nodes:
            path = self._find_path_to_target_static(
                board, self._base_pos, (node.x, node.y)
            )
            if path is not None and (best_path is None or len(path) < len(best_path)):
                best_node = node
                best_path = path

        if best_node is None:
            # Fallback to first stone node
            best_node = stone_nodes[0]
        self._quarry_pos = (best_node.x, best_node.y)

        # Find path from base to quarry
        self._road_path = self._find_path_to_target(self._quarry_pos)
        self._road_idx = 0
        print(
            f"DEBUG: base={self._base_pos}, quarry={self._quarry_pos}, path={self._road_path}"
        )

        self._built_quarry = False
        self._claimed = False

    def _find_path_to_target_static(
        self, board, base_pos: tuple[int, int], target: tuple[int, int]
    ) -> list[tuple[int, int]] | None:
        """BFS to find path from base to target through planned roads (static version for init)."""
        queue = deque([base_pos])
        visited = {base_pos}
        parent = {}

        while queue:
            x, y = queue.popleft()

            if (x, y) == target:
                # Reconstruct path (excluding base and target)
                path = []
                current = (x, y)
                while current in parent:
                    prev = parent[current]
                    if prev != base_pos:
                        path.append(prev)
                    current = prev
                path.reverse()
                return path

            for dx, dy in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                nx, ny = x + dx, y + dy
                if (
                    nx < 0
                    or ny < 0
                    or ny >= len(board.grid)
                    or nx >= len(board.grid[0])
                ):
                    continue
                if (nx, ny) in visited:
                    continue

                if (nx, ny) == target:
                    visited.add((nx, ny))
                    parent[(nx, ny)] = (x, y)
                    queue.append((nx, ny))
                elif board.grid[ny][nx] == TerrainType.PLANNED_ROAD.value:
                    visited.add((nx, ny))
                    parent[(nx, ny)] = (x, y)
                    queue.append((nx, ny))

        return None

    def _find_path_to_target(self, target: tuple[int, int]) -> list[tuple[int, int]]:
        """BFS to find path from base to target through planned roads."""
        board = self.game_state.board
        queue = deque([self._base_pos])
        visited = {self._base_pos}
        parent = {}

        while queue:
            x, y = queue.popleft()

            if (x, y) == target:
                # Reconstruct path (excluding base and target)
                path = []
                current = (x, y)
                while current in parent:
                    prev = parent[current]
                    if prev != self._base_pos:
                        path.append(prev)
                    current = prev
                path.reverse()
                return path

            for dx, dy in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                nx, ny = x + dx, y + dy
                if (
                    nx < 0
                    or ny < 0
                    or ny >= len(board.grid)
                    or nx >= len(board.grid[0])
                ):
                    continue
                if (nx, ny) in visited:
                    continue

                # Allow target, planned roads, or existing structures
                if (nx, ny) == target:
                    visited.add((nx, ny))
                    parent[(nx, ny)] = (x, y)
                    queue.append((nx, ny))
                elif board.grid[ny][nx] == TerrainType.PLANNED_ROAD.value:
                    visited.add((nx, ny))
                    parent[(nx, ny)] = (x, y)
                    queue.append((nx, ny))
                elif self.game_state.get_structure_at(nx, ny):
                    visited.add((nx, ny))
                    parent[(nx, ny)] = (x, y)
                    queue.append((nx, ny))

        return []

    def generate_more_turn_actions(self) -> Generator[BaseAction, None, None]:  # type: ignore[override]
        if self._claimed:
            return

        # Build one road per turn to conserve resources
        if self._road_idx < len(self._road_path):
            road_pos = self._road_path[self._road_idx]
            if not self.game_state.get_structure_at(*road_pos):
                # Only build this road if it's adjacent to an existing structure
                if self._is_adjacent_to_player_structure(road_pos):
                    yield BuildAction(
                        x=road_pos[0], y=road_pos[1], structure_type=StructureType.ROAD
                    )
                    self._road_idx += 1
                # If not adjacent, don't build anything this turn
                return  # Only yield one action per turn
            else:
                # Road already exists, move to next position
                self._road_idx += 1
                return  # Don't yield any action, just wait for next turn

        # Build quarry once all roads are built
        if not self._built_quarry:
            # Check if we have enough stone (quarry costs 10)
            base_stone = self.game_state.base.storage.get(ResourceType.STONE, 0)
            if base_stone < 10:
                return  # Wait to accumulate more stone (shouldn't happen in ramp_up)
            self._built_quarry = True
            yield BuildAction(
                x=self._quarry_pos[0],
                y=self._quarry_pos[1],
                structure_type=StructureType.STONE_QUARRY,
            )
            return  # Only yield one action per turn

        structure = self.game_state.get_structure_at(*self._quarry_pos)
        if structure and not structure.extracted_this_turn:
            yield ExtractAction(x=self._quarry_pos[0], y=self._quarry_pos[1])

            amount = structure.storage.get(ResourceType.STONE, 0)
            if amount > 0:
                # Build transfer path: quarry -> roads (reversed) -> base
                transfer_path = (
                    [self._quarry_pos]
                    + list(reversed(self._road_path))
                    + [self._base_pos]
                )
                yield TransferAction(
                    path=transfer_path,
                    resource=ResourceType.STONE,
                    amount=amount,
                )

        if self.game_state.base.storage.at_least(self.game_state.goal_resources):
            self._claimed = True
            yield ClaimWinAction(x=self._base_pos[0], y=self._base_pos[1])

    def _is_adjacent_to_player_structure(self, position: tuple[int, int]) -> bool:
        """Check if a position is adjacent to any existing player structure."""
        x, y = position
        for dx, dy in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
            nx, ny = x + dx, y + dy
            if self.game_state.get_structure_at(nx, ny):
                return True
        return False
