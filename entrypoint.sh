#!/bin/sh

python manage.py makemigrations
python manage.py migrate --no-input
python manage.py collectstatic --no-input

# gunicorn core.wsgi:app
# gunicorn core.wsgi:application --bind 0.0.0.0:8000
python manage.py runserver 0.0.0.0:8000
