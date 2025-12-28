"""
Local development settings - uses SQLite for testing without Docker
"""

from .settings import *

# Use SQLite for local development testing
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Disable logging for cleaner output
LOGGING['loggers']['calculator.services']['level'] = 'ERROR'
