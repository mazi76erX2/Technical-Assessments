"""
Game actions for the Recruitment Game Server.

Provides strongly typed action classes for game simulation.
"""

from __future__ import annotations

from abc import ABC, abstractmethod
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from api_client.models import Action
    from game_simulation.game_state import GameState

from game_simulation.game_types import HasPosition, ResourceType, StructureType


class BaseAction(ABC):
    """Abstract base class for all game actions."""

    @property
    @abstractmethod
    def action_type(self) -> str:
        """The action type identifier."""
        pass

    @abstractmethod
    def to_api_action(self) -> Action:
        """Convert this action to an API action."""
        pass

    @abstractmethod
    def apply(self, game_state: GameState) -> None:
        """Apply this action to the game state."""
        pass


class BuildAction(BaseAction):
    """BUILD action: Build a structure at specified coordinates."""

    def __init__(self, x: int, y: int, structure_type: StructureType):
        self.x = x
        self.y = y
        self.type = structure_type

    @property
    def action_type(self) -> str:
        return "BUILD"

    def to_api_action(self) -> Action:
        from api_client.models import Action

        return Action(
            action="BUILD", args={"x": self.x, "y": self.y, "type": self.type.value}
        )

    def __str__(self) -> str:
        return f"BUILD {self.type.value} at ({self.x},{self.y})"

    def apply(self, game_state: GameState) -> None:
        """Apply this BUILD action to the game state."""
        from .structures import (
            GameStructure,
            RoadStructure,
            StoneQuarryStructure,
            IronMineStructure,
            SmelterStructure,
        )

        structure: GameStructure

        if self.type == StructureType.ROAD:
            structure = RoadStructure(x=self.x, y=self.y)
        elif self.type == StructureType.STONE_QUARRY:
            structure = StoneQuarryStructure(x=self.x, y=self.y)
        elif self.type == StructureType.IRON_MINE:
            structure = IronMineStructure(x=self.x, y=self.y)
        elif self.type == StructureType.SMELTER:
            structure = SmelterStructure(x=self.x, y=self.y)
        elif self.type == StructureType.BASE:
            raise ValueError(f"Cannot build type: {self.type}")
        else:
            raise ValueError(f"Unknown structure type: {self.type}")

        # Find base structure using the helper method
        base = game_state.base

        # Deduct costs from base
        base.storage.subtract_in_place(structure.build_cost)

        # Add the concrete structure to game state
        game_state.add_structure(structure)


class ClaimWinAction(BaseAction):
    """CLAIM_WIN action: Claim victory at specified coordinates."""

    def __init__(self, x: int, y: int):
        self.x = x
        self.y = y

    @property
    def action_type(self) -> str:
        return "CLAIM_WIN"

    def to_api_action(self) -> Action:
        from api_client.models import Action

        return Action(action="CLAIM_WIN", args={"x": self.x, "y": self.y})

    def __str__(self) -> str:
        return f"CLAIM_WIN at ({self.x},{self.y})"

    def apply(self, game_state: GameState) -> None:
        """Apply this CLAIM_WIN action to the game state."""
        pass


class ExtractAction(BaseAction):
    """MINE action: Extract resources at the structure's rate."""

    def __init__(self, x: int, y: int):
        self.x = x
        self.y = y

    @property
    def action_type(self) -> str:
        return "MINE"

    def to_api_action(self) -> Action:
        from api_client.models import Action

        return Action(action="MINE", args={"x": self.x, "y": self.y})

    def __str__(self) -> str:
        return f"MINE at ({self.x},{self.y})"

    def apply(self, game_state: GameState) -> None:
        """Apply this MINE action to the game state."""
        from .structure_mixins import ExtractionStructure, StorageStructure

        structure = game_state.get_structure_at(self.x, self.y)

        assert isinstance(
            structure, ExtractionStructure
        ), f"Cannot mine on non-extraction structure: {structure}"
        assert isinstance(
            structure, StorageStructure
        ), f"Cannot mine on non-storage structure: {structure}"

        structure.storage.add(structure.extracted_resource, structure.rate)
        structure.extracted_this_turn = True


class TransferAction(BaseAction):
    """TRANSFER action: Move resources along a path."""

    def __init__(self, path: list[HasPosition], resource: ResourceType, amount: int):
        self.path = path
        self.resource = resource
        self.amount = amount

    @property
    def action_type(self) -> str:
        return "TRANSFER"

    def to_api_action(self) -> Action:
        from api_client.models import Action

        return Action(
            action="TRANSFER",
            args={
                "path": [[x, y] for x, y in self.path],
                "resource": self.resource.value,
                "amount": self.amount,
            },
        )

    def __str__(self) -> str:
        start, end = self.path[0], self.path[-1]
        return f"TRANSFER {self.amount} {self.resource.value} ({start[0]},{start[1]})→({end[0]},{end[1]})"

    def apply(self, game_state: GameState) -> None:
        """Apply this TRANSFER action to the game state."""
        assert len(self.path) > 1, f"Invalid transfer path: {self.path}"
        assert self.path[0] != self.path[-1], f"Invalid transfer path: {self.path}"

        from .structure_mixins import StorageStructure

        source_storage = game_state.get_structure_at(*self.path[0])
        dest_storage = game_state.get_structure_at(*self.path[-1])

        assert isinstance(
            source_storage, StorageStructure
        ), f"Source storage is not a StorageStructure: {source_storage}"
        assert isinstance(
            dest_storage, StorageStructure
        ), f"Destination storage is not a StorageStructure: {dest_storage}"

        source_amount = source_storage.storage[self.resource]
        transfer_amount = min(self.amount, source_amount)

        if transfer_amount > 0:
            source_storage.storage.remove(self.resource, transfer_amount)
            dest_storage.storage.add(self.resource, transfer_amount)


class ProduceAction(BaseAction):
    """PRODUCE action: Run production cycles at a production structure.

    Each structure can be activated at most once per turn.
    On activation, the structure attempts up to `rate` full cycles of its recipe.
    Each cycle consumes inputs and produces outputs as defined in the recipe.
    """

    def __init__(self, x: int, y: int):
        self.x = x
        self.y = y

    @property
    def action_type(self) -> str:
        return "PRODUCE"

    def to_api_action(self) -> Action:
        from api_client.models import Action

        return Action(action="PRODUCE", args={"x": self.x, "y": self.y})

    def __str__(self) -> str:
        return f"PRODUCE at ({self.x},{self.y})"

    def apply(self, game_state: GameState) -> None:
        """Apply this PRODUCE action to the game state."""
        from .structure_mixins import ProductionStructure

        structure = game_state.get_structure_at(self.x, self.y)

        assert isinstance(
            structure, ProductionStructure
        ), f"Cannot produce on non-production structure: {structure}"

        # Calculate how many cycles we can run (up to rate)
        max_cycles = structure.rate
        available_cycles = max_cycles

        # Check input availability
        for input_resource, input_amount in structure.recipe_inputs.items():
            available_input = structure.storage[input_resource]
            possible_cycles = available_input // input_amount
            available_cycles = min(available_cycles, possible_cycles)

        assert (
            available_cycles > 0
        ), f"Insufficient inputs for production at ({self.x},{self.y})"

        # Consume inputs
        for input_resource, input_amount in structure.recipe_inputs.items():
            structure.storage.remove(input_resource, input_amount * available_cycles)

        # Produce outputs
        for output_resource, output_amount in structure.recipe_outputs.items():
            structure.storage.add(output_resource, output_amount * available_cycles)

        structure.produced_this_turn = True


# Union of all action types
AnyAction = (
    BuildAction | ClaimWinAction | ExtractAction | TransferAction | ProduceAction
)

# Mapping used for capability checks and possible factory helpers
ACTION_TYPE_MAP: dict[str, type[BaseAction]] = {
    "BUILD": BuildAction,
    "CLAIM_WIN": ClaimWinAction,
    "MINE": ExtractAction,
    "TRANSFER": TransferAction,
    "PRODUCE": ProduceAction,
}


def supported_action_types() -> set[str]:
    """Return action identifiers implemented by the solver."""
    return set(ACTION_TYPE_MAP.keys())
