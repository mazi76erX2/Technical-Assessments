"""Advanced strategy for solving the recruitment game.

This strategy is designed to handle multiple resource types and complex scenarios.
It builds a road network, extracts resources, and transfers them to the base.
"""

from __future__ import annotations

from collections import deque
from collections.abc import Generator
from typing import List, Tuple

from game_simulation.actions import (
    BaseAction,
    BuildAction,
    ClaimWinAction,
    ExtractAction,
    TransferAction,
)
from game_simulation.game_state import GameState
from game_simulation.game_types import ResourceType, StructureType, TerrainType
from game_simulation.inventory import Inventory
from game_simulation.structure_mixins import Structure
from strategies.base_strategy import BaseStrategy


class AdvancedStrategy(BaseStrategy):
    """Advanced strategy that can handle multiple resource types and complex scenarios."""

    def __init__(self, game_state: GameState):
        super().__init__(game_state)

        # Track which resources we need to collect
        self.target_resources = game_state.goal_resources.copy()

        # Track which resource nodes we've already built quarries for
        self.built_quarries = set()

        # Track which planned roads we've built
        self.built_roads = set()

        # Track which resources we've collected enough of
        self.completed_resources = set()

        # Find all resource nodes
        self.resource_nodes = []
        for node in game_state.board.resource_nodes:
            self.resource_nodes.append((node.x, node.y, node.resource))

        # Find all planned roads
        self.planned_roads = []
        for y, row in enumerate(game_state.board.grid):
            for x, tile in enumerate(row):
                if tile == TerrainType.PLANNED_ROAD.value:
                    self.planned_roads.append((x, y))

        # Find the base position
        self.base_pos = (game_state.base.x, game_state.base.y)

        # Track the current resource we're focusing on
        self.current_resource = None

        # Track the path from the current resource to the base
        self.current_path = []

        # Track if we've built a road to the current resource
        self.current_road_built = False

        # Track if we've built a quarry at the current resource
        self.current_quarry_built = False

    def generate_more_turn_actions(self) -> Generator[BaseAction]:
        """Generate actions for the current turn."""

        # Check if we've completed all resources
        if self._check_win_condition():
            yield ClaimWinAction(x=self.base_pos[0], y=self.base_pos[1])
            return

        # If we haven't chosen a resource to focus on yet, choose one
        if self.current_resource is None:
            self._choose_next_resource()
            if self.current_resource is None:
                # No more resources to collect
                return

        # If we haven't built a road to the current resource, build it
        if not self.current_road_built:
            yield from self._build_road_to_resource()
            if not self.current_road_built:
                # Road not built yet, wait for next turn
                return

        # If we haven't built a quarry at the current resource, build it
        if not self.current_quarry_built:
            yield from self._build_quarry_at_resource()
            if not self.current_quarry_built:
                # Quarry not built yet, wait for next turn
                return

        # Extract resources from the quarry
        yield from self._extract_resources()

        # Transfer resources to the base
        yield from self._transfer_resources_to_base()

        # Check if we've collected enough of the current resource
        if self._check_resource_completed():
            # Move on to the next resource
            self.current_resource = None
            self.current_path = []
            self.current_road_built = False
            self.current_quarry_built = False

    def _check_win_condition(self) -> bool:
        """Check if we've collected enough resources to win."""
        return self.game_state.base.storage.at_least(self.target_resources)

    def _choose_next_resource(self) -> None:
        """Choose the next resource to focus on."""
        # Find a resource we haven't completed yet
        for x, y, resource in self.resource_nodes:
            if resource not in self.completed_resources:
                self.current_resource = (x, y, resource)
                # Find the shortest path to this resource
                self.current_path = self._find_path_to_resource(x, y)
                print(
                    f"DEBUG: Chose resource at ({x}, {y}), path = {self.current_path}"
                )
                break

    def _build_road_to_resource(self) -> Generator[BaseAction]:
        """Build a road to the current resource."""
        if not self.current_path:
            # Path is empty - either resource is adjacent or no path exists
            self.current_road_built = True
            return

        # Build the first road segment in the path
        road_pos = self.current_path[0]
        if road_pos not in self.built_roads:
            yield BuildAction(
                x=road_pos[0], y=road_pos[1], structure_type=StructureType.ROAD
            )
            self.built_roads.add(road_pos)
            self.current_path.pop(0)
        else:
            # Road already built, move to the next one
            self.current_path.pop(0)

        # If we've built all the roads in the path, mark it as complete
        if not self.current_path:
            self.current_road_built = True

    def _build_quarry_at_resource(self) -> Generator[BaseAction]:
        """Build a quarry at the current resource."""
        if not self.current_resource:
            return

        x, y, resource = self.current_resource
        if (x, y) not in self.built_quarries:
            # Determine the structure type based on the resource
            if resource == ResourceType.STONE:
                structure_type = StructureType.STONE_QUARRY
            else:
                # Unknown resource type, can't build a quarry
                return

            yield BuildAction(x=x, y=y, structure_type=structure_type)
            self.built_quarries.add((x, y))

        self.current_quarry_built = True

    def _extract_resources(self) -> Generator[BaseAction]:
        """Extract resources from the current quarry."""
        if not self.current_resource:
            return

        x, y, resource = self.current_resource

        # Get the structure at this position
        structure = self.game_state.get_structure_at(x, y)
        if not structure:
            return

        # Check if the structure is an extraction structure and can be extracted
        if hasattr(structure, "can_be_extracted") and structure.can_be_extracted:
            # Extract resources
            yield ExtractAction(x=x, y=y)

    def _transfer_resources_to_base(self) -> Generator[BaseAction]:
        """Transfer resources from the current quarry to the base."""
        if not self.current_resource:
            return

        x, y, resource = self.current_resource

        # Get the structure at this position
        structure = self.game_state.get_structure_at(x, y)
        if not structure:
            return

        # Check if the structure has storage
        if not hasattr(structure, "storage"):
            return

        # Get the amount of resources available
        amount = structure.storage.get(resource, 0)
        if amount <= 0:
            return

        # Transfer resources to the base
        yield TransferAction(
            path=[self.base_pos, (x, y), self.base_pos],
            resource=resource,
            amount=amount,
        )

    def _check_resource_completed(self) -> bool:
        """Check if we've collected enough of the current resource."""
        if not self.current_resource:
            return False

        x, y, resource = self.current_resource

        # Check if we've collected enough of this resource
        if self.game_state.base.storage.get(resource, 0) >= self.target_resources.get(
            resource, 0
        ):
            self.completed_resources.add(resource)
            return True

        return False

    def _find_path_to_resource(
        self, target_x: int, target_y: int
    ) -> List[Tuple[int, int]]:
        """Find the shortest path from the base to the resource."""
        # Use BFS to find the shortest path
        queue = deque([(self.base_pos[0], self.base_pos[1])])
        visited = {self.base_pos}
        parent = {}

        while queue:
            x, y = queue.popleft()

            # Check if we've reached the target
            if x == target_x and y == target_y:
                # Reconstruct the path (excluding target - quarry goes there, not road)
                path = []
                current = (x, y)
                while current != self.base_pos:
                    path.append(current)
                    current = parent[current]
                path.reverse()
                # Exclude the target position (resource node)
                if path and path[-1] == (target_x, target_y):
                    path.pop()
                return path

            # Check all adjacent positions
            for dx, dy in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                nx, ny = x + dx, y + dy

                # Check if the position is valid
                if (
                    nx < 0
                    or ny < 0
                    or nx >= len(self.game_state.board.grid[0])
                    or ny >= len(self.game_state.board.grid)
                ):
                    continue

                # Check if we've already visited this position
                if (nx, ny) in visited:
                    continue

                # Check if this is the target position (resource node)
                if nx == target_x and ny == target_y:
                    visited.add((nx, ny))
                    parent[(nx, ny)] = (x, y)
                    queue.append((nx, ny))
                    continue

                # Check if there's a structure at this position
                structure = self.game_state.get_structure_at(nx, ny)
                if structure:
                    # There's already a structure here, we can use it
                    visited.add((nx, ny))
                    parent[(nx, ny)] = (x, y)
                    queue.append((nx, ny))
                elif (
                    self.game_state.board.grid[ny][nx] == TerrainType.PLANNED_ROAD.value
                ):
                    # This is a planned road, we can build a road here
                    visited.add((nx, ny))
                    parent[(nx, ny)] = (x, y)
                    queue.append((nx, ny))

        # No path found
        return []
