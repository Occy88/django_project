# django_project
THIS IS A TEMPLATE PROJECT FOR A QUICK START:

Only difficulty on Mac: 
getting postgres to work. you need to read tutorials e.t.c.
probably something along the lines of brew install postgresql

Make sure you create a database according the the specifications in
django_project/settings.py.
(user and database should be created manualy)
install postgresql if you want to use that (recommended); (look online)
Login to psql if that's what you are using:
psql -U postgres
in psql: 
create database "chosen db name (in settings.py)"
create user "username (in settings.py)" with password 'password (in settings.py)'

Make sure to surround the relevant attributes with quotes only replace what is inside the quotes.

For the general user:
Linux:
virtualenv venv
source venv/bin/activate
pip3 install -r requirements.txt
./scripts/migrate.sh  (run this a couple times if there are any errors first time, you may get errors if there are dependencies)
./scripts/createsuperuser.sh   (creates the user with which you can login on http:...../admin
./scripts/run.sh   (starts the server)

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
