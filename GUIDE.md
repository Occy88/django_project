# Django Beginners Guide

## Introduction
This guide is meant for people who have little or no exposure to django. It is meant as a quick get started guide on a pre-configured project
so the developer can understand how things work and become productive quickly. Please take your time in reading this guide as every section is important.
This guide is NOT perfect or highly in depth. I made this guide with the purpose of saving time for beginners insted of spending hours looking for half baked information online. You will need to spend time to understand django in greater depth.

By the end of this guide you should be able to:
- setup a project serving React and Django Rest on Heroku via Webpack
- push the project to production on heroku
- have an understanding of Django and Web development, as well as common Issues and how to resolve them.
- Create your own databases and the interaction between the backend and frontend

The base project is setup with a minimal example of working code so you can start being productive very quickly and allow you to experiment 
with your own Ideas.

Please use the django documentation when unsure about functionality such as more complex database interaction or things such as sending Emails etc.


## Web Development
When getting started it is often difficult to understand how the web works, for most people it is magic. Here is a simplified explanation (enough to start development):
1. The server listens for connections at a givent url eg. website.com
2. the user sends a request to this url eg. POST -> https://website.com/some_stuff
3. The request will be redirected to your server and Django will parse the url i.e. request recieved: parameters= some_stuff
depending on the some_stuff you will do different things such as manipulating the database, but eventually you will send some reply containing some data
such as a new web page or some json containing data or an error code etc.

Why a framework: 
the framework does a lot of heavy lifting and simplifcation in terms of managing sessions and making sure the user is safe as well as making it easier for the developer to quickly produce results which are scalable without too much overhead. You don't want to manage multitasking and login security as this has been tested but much more experienced people and has been proven to work.

## Tools 
I have been developing in Django for the past three years, my aims have been directed towards safer, simpler and more scalable solutions.

### React, npm & Webpack 
I setup this project to use these three tools because they make front end development cleaner and more scalable as larger projects are 
easier to navigate thanks to the use of imports and components. Proper layout will be discussed later.
#### React & (bootstrap)
is a framework for web development, it is used and developed by facebook proving its usefullness.  
#### NPM
 allows the user to use javascript packages created by other people making code less coupled and easily scalable as well as opening many opportunities for faster and cleaner web development. 
#### Webpack
This allows all js code to be bundled and served to the user, it also allows the developer to modify their code and see the effects live.

### Django Rest Framework
This framework has been incorporated into this project because it allows serialisation and provides a browsable api making things easier to 
develop and to understand, serving data from the database is also simplified.
Thanks to this framework you do not need to serialize database objects to save them or serve them reducing the overall number of lines of code
you would need to write.

### Guardian
Django Guardian is used for permission management at the object level, it is helpful for instances where permissions are based on newly created database
objects such as employees to a company object. 


## Project Structure
This is an overview of which locations of the project are responsible for what. It will provide you with an understanding of how a request is handled and where you should write code and for which functionality.
```
project_name/

    project_name/
        settings.py
        urls.py
        middleware.py
        views.py
        wsgi.py

    some_app/
        migrations/
        static/
            some_app/
                components/
                    ComponentA/
                        index.js
                        lang.js
                        style.scss
                    ComponentB/
                       index.js
                       lang.js
                       style.scss
                    apps.py
                    models.py
                    serializers.py
                    tests.py
                    urls.py
                    views.py

    some_app2/
        ...

    static/
        components/
            ...

    scripts/

    dist/
    
    staticfiles/

    package.json
    manage.py
    webpack.config.js
    requirements.txt
    ...

```
### Project Settings and Setup files:
#### app_name/app_name/settings.py
Although the file is moderately well anotated I will go through the important sections.

##### ENV_ROLE: 
I added this as a flag for development or running on heroku. Before pushing to heroku flag should be set to production.
Common issues: 
If you run the project in Production on your local machine, it will auto redirect you to https://localhost:8000
this will brake your website. you need to change and CLEAR YOUR CACHE before manually going to http://localhost:8000.

##### INSTALLED_APPS
Django uses Apps. Each app should serve a different purpose and should be easilly swappable i.e. low coupling. for example the company_manager app allows you to create a company, assign object permisions to it. The frontend app only serves the frontend for a specific project. 

##### DATABASES
Defines the engine you want to use e.g. mysql, postgres, etc. I opted for postgres as it is powerful and compatible with heroku. 

##### MIDDLEWARE
Essentially code that executes prior to any url parsing, so every time the user connects, mostly csrf,security,login,and more.

##### EMAIL_...
As it is described, this is the email that the server will use to send emails to users or the admin upon an error with the description of the error.

### Life of a User REQUEST: 
This will give you an idea of what happens in django when a user makes any sort of request.

1. The user enters the website: Request starts int he Middleware.
There is a middleware file under project_name/project_name this file should have a minial amount of logic as it will
be executed every time there is any request.

2. project_name/project_name/urls.py
The url is parsed and directed to the relevant application devined in this file

3. project_name/app_name/urls.py
The request is parsed and sent to the relevant View

4. project_name/app_name/views.py
The relevant view executes the logic required given the parameters in the request.
We are using class based views, and Django Rest-api views (for the api)
A database table can be imported from: project_name/app_name/models.py an example is provided.
The reply is sent here, a reply can be anython from json to html.



### Database:
the database tables (models) are defined in the project_name/app_name/models.py
We are using Django rest api to facilitate serving of the data and making the whole project more managable.
Each model has a serialization for the model located in: project_name/app_name/serializers.py
we use this class to serve the data to the user and populating the database. These are imported in the views file where the request is handled. Further details and tutorials available on the Django rest api website, however the provided examples should facilitated this process as they are already functional.



## SETUP AND TUTORIAL
### Cloning and setting up a project
1. Clone the repo: https://github.com/Occy88/django_project.git
2. Open the project in your development environment of choice, I recommend Pycharm.
3. Open the project in your terminal window
4. setup the virtual environment: 
`virtualenv venv; source venv/bin/activate; pip3 install -r requiremnts.txt;`
5. change any string matching "django_project" in the whole project to a name of your choice say "your_project"
(ctrl+shift+r) in Pycharm
Also rename all directories matching django_project to the choice for your project.
Link the project to your github:
rm -rf .git
git init
follow the rest of the instructions on github or your choice of hosting platform
6. initiate a heroku app you would like to link your project to: 
`heroku create your_project`
`heroku git:remote -a your_project`
`heroku config:set DISABLE_COLLECTSTATIC=1`
for pushing to production:
-set the development flag to production
`./scripts/collectstatic`
`git commit -a -m 'your message'`
`git push`
`git push heroku master`

7. setup the database
If you are using Postgres (following tutorials on postgres):
create a database as defined in project_name/project_name/settings.py: DATABASES: name
`psql -U postgres`
`create database django_project_database`
`create user django_project_user with password 'password'`

8. Run migrations
`./scripts/migrate.sh`
Note: you will need to modify this script when you create new apps,

9. create a super user
`./scripts/createsuperuser.sh`

10. Start the project:
`./scripts/run.sh`
and in a new window:
`npm start`
open a web browser and go to http://localhost:8000

### Quick tips
if you need two different apps to have some link between their models then look at how it is done
between the accounts app and the company app, see that a Profile has a company, however it is oblivious to
what specific model it uses, meaning you can swap out the company_manager for another app. This way you can
keep all the services and api for the company_manager separate and well maintained without coupling it with other apps. 


Take a look at how a list of companies is served, and how a single company is served
it also implements an object level permisions example for those that need it.
(RegisterUserToCompany and CompanyPermissions)


Feel free to copy paste code and change it to your liking as it will help you understand how things work better.


## Frontend Dev











