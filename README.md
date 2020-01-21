# django_project
THIS IS A TEMPLATE PROJECT FOR A QUICK START:

Only difficulty on Mac: 
getting postgres to work. you need to read tutorials e.t.c.
probably something along the lines of brew install postgresql

Make sure you create a database according the the specifications in
django_project/settings.py.
(user and database should be created manualy)
in psql: 
create database "db name"
create user "username" with password 'password'

For the general user:
Linux:
virtualenv venv
source venv/bin/activate
pip3 install -r requirements.txt
./scripts/migrate.sh
./scripts/createsuperuser.sh
./scripts/run.sh

in another tab:
npm i; npm start

go to localhost:8000

when going to production:
This is not the exact commands, a quick google search
will show you what to do but it should be along the lines of:
change the development flag to production in settings.py
then hook the project to heroku and run
git remote add project name to heroku. 
heroku run disable collect static (look at a heroku totorial)
./scripts/collectstatic.sh
git push...
git push heroku master
# django_project
