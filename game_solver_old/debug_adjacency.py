#!/usr/bin/env python3

"""Debug script to check adjacency issues in the ramp_up strategy."""

from game_simulation.game_types import TerrainType
from api_client.client import GameClient
from game_simulation.game_state import GameState
from dotenv import load_dotenv
import os


def _get_env_var(*names: str) -> str | None:
    for name in names:
        value = os.environ.get(name)
        if value:
            return value
    return None


def load_environment() -> None:
    load_dotenv()
    if not _get_env_var("GAME_SERVER_TOKEN", "ARBITER_TOKEN"):
        print(
            "Set GAME_SERVER_TOKEN (or legacy ARBITER_TOKEN) in your environment or .env file",
            file=sys.stderr,
        )
        sys.exit(1)


def get_client() -> GameClient:
    base_url = _get_env_var("GAME_SERVER_BASE_URL", "ARBITER_BASE_URL")
    token = _get_env_var("GAME_SERVER_TOKEN", "ARBITER_TOKEN")

    if not base_url:
        print(
            "Set GAME_SERVER_BASE_URL (or legacy ARBITER_BASE_URL) in your environment or .env file",
            file=sys.stderr,
        )
        sys.exit(1)

    return GameClient(base_url=base_url, token=token)


def main():
    load_environment()

    with get_client() as client:
        task = client.get_task(1, "e8ecd577-de3e-42a3-b6f3-0fed5b74eff4")
        game_state = GameState(task.level)

        print("Board analysis:")
        print(f"Base position: ({game_state.base.x}, {game_state.base.y})")

        # Find planned road positions
        planned_roads = []
        for y, row in enumerate(game_state.board.grid):
            for x, tile in enumerate(row):
                if tile == TerrainType.PLANNED_ROAD.value:
                    planned_roads.append((x, y))

        print(f"Planned road positions: {planned_roads}")

        # Check adjacency for each planned road
        base_x, base_y = game_state.base.x, game_state.base.y
        for road_x, road_y in planned_roads:
            is_adjacent = (
                abs(road_x - base_x) == 1 and road_y == base_y
            ) or (  # horizontal
                abs(road_y - base_y) == 1 and road_x == base_x
            )  # vertical
            print(
                f"Road at ({road_x}, {road_y}) is {'ADJACENT' if is_adjacent else 'NOT ADJACENT'} to base at ({base_x}, {base_y})"
            )

        # Print board for visual inspection
        print("\nBoard:")
        for y, row in enumerate(game_state.board.grid):
            row_str = ""
            for x, tile in enumerate(row):
                if (x, y) == (base_x, base_y):
                    row_str += "🏠"
                elif (x, y) in planned_roads:
                    row_str += "🛣️"
                elif tile == TerrainType.PLANNED_ROAD.value:
                    row_str += "🟨"
                elif tile == "GRASS":
                    row_str += "🟩"
                elif tile == "STONE":
                    row_str += "◈"
                else:
                    row_str += tile
            print(f"{y:2d} {row_str}")


if __name__ == "__main__":
    import sys

    main()
