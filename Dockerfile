###########
# BUILDER #
###########

FROM python:3.8-buster AS builder

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
RUN apt-get update # && apt install postgresql-dev gcc python3-dev

# lint
RUN pip install --upgrade pip
RUN pip install flake8
COPY . .
RUN flake8 --ignore=E501,F401 .

# install dependencies
COPY ./requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /usr/src/app/wheels -r requirements.txt


#########
# FINAL # separated to reduce final size
#########

FROM python:3.8-buster

# create the app user
RUN addgroup --system app && adduser --system app --ingroup app

# create the appropriate directories
ENV HOME=/home/app
ENV APP_HOME=/home/app/web
RUN mkdir $APP_HOME
RUN mkdir $APP_HOME/staticfiles
RUN mkdir $APP_HOME/media
WORKDIR $APP_HOME

# install dependencies
RUN apt-get update  && apt-get install -y netcat npm
COPY --from=builder /usr/src/app/wheels /wheels
COPY --from=builder /usr/src/app/requirements.txt .
RUN pip install --no-cache /wheels/*

# copy project
COPY . $APP_HOME

# chown all the files to the app user and collect staticfiles.
RUN chown -R app:app $APP_HOME && ./scripts/collect_static.sh

# change to the app user - security reason
USER app

# run entrypoint.sh
ENTRYPOINT ["/home/app/web/entrypoint.sh"]
