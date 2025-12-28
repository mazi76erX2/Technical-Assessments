from .base import *


DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.environ.get("DATABASE_NAME", "sentiment-analysis"),
        "USER": os.environ.get("DATABASE_USERNAME", "postgres"),
        "PASSWORD": os.environ.get("DATABASE_PASSWORD", "postgres"),
        "HOST": os.environ.get("DATABASE_HOST", "db"),
        "PORT": os.environ.get("DATABASE_PORT", "5432"),
    }
}


DEBUG = str2bool(os.environ.get("DEBUG", "true"))

ALLOWED_HOSTS: list[str] = os.environ.get("ALLOWED_HOST_DNS", "").split(" ")
