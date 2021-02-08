#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

# clean and recreate the database - for dev only. Remove for deployment.
# python manage.py flush --no-input

# run migrations each time - does nothing if db is all set up already.
python manage.py migrate

gunicorn django_project.wsgi:application --bind 0.0.0.0:8080