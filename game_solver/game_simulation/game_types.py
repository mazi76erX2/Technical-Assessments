from __future__ import annotations

from enum import Enum
from typing import NamedTuple, Protocol


class ResourceType(str, Enum):
    STONE = "STONE"
    IRON_ORE = "IRON_ORE"
    IRON = "IRON"


class StructureType(str, Enum):
    BASE = "BASE"
    ROAD = "ROAD"
    STONE_QUARRY = "STONE_QUARRY"
    IRON_MINE = "IRON_MINE"
    SMELTER = "SMELTER"


class TerrainType(str, Enum):
    GRASS = "GRASS"
    PLANNED_ROAD = "PLANNED_ROAD"


class StructureInterface(str, Enum):
    Buildable = "Buildable"
    Transport = "Transport"
    Storage = "Storage"
    Extraction = "Extraction"
    BaseOnly = "BaseOnly"
    Production = "Production"


class HasPosition(Protocol):
    """Protocol for objects that have x and y attributes."""

    x: int
    y: int


class Position(NamedTuple):
    """A position in the game board."""

    x: int
    y: int


def supported_resource_types() -> set[str]:
    """Return resource identifiers implemented by the solver."""
    return {resource.value for resource in ResourceType}


def supported_structure_types() -> set[str]:
    """Return structure identifiers implemented by the solver."""
    return {structure.value for structure in StructureType}
