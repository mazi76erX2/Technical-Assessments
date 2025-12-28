#!/bin/sh

# Chack if database has started
if [ "$DATABASE" = "valuation-roll" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $DATABASE_HOST $DATABASE_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

until cd /app/valuation_roll
do
    echo "Waiting for server volume..."
done

set -e

python manage.py migrate  --noinput
exec "$@"
