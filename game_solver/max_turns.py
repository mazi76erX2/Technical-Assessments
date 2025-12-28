import os
from api_client.client import GameClient

client = GameClient(os.environ["GAME_SERVER_BASE_URL"], os.environ["GAME_SERVER_TOKEN"])
task_id = "f4ad384c-e8d5-420d-9c10-ef7cd6064704"
task = client.get_task(2, task_id)

print("max_turns:", task.level.max_turns)
for s in task.level.structures:
    if s.type == "BASE":
        print("BASE at", (s.x, s.y), "storage=", s.storage)