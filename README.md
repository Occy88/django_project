# django_project


Project structure under project root:<br>
Temporary directory is for all temporary files suc as html testing/design e.t.c. <br>
django_project directory is required to be named like the root because it contains the 
most important files controlling the project<br>
The other directories are apps <br>
requirements.txt is a list of the dependencies which are automatically installed<br>
in each app:<br>
models.py contains the database classes<br>
urls.py are the url's that are available when the user accesses the supplier_site<br>
views.py are the functions executed after a url is accessed<br>
static contains all the static files (js, css)<br>
templates are all the html files<br>
.gitignore are all the files to be ignored during commits<br>

























MAKE SURE TO BRANCH BEFORE DOING ANY COMMITS:<br>
git clone 'project name'<br>
git checkout -b 'branch name'<br>
<br>
please install the dependencies.<br>
virtualenve venv<br>
source venv/bin/activate<br>
pip3 install -r requirements.txt<br>
<br>
running the server on localhost:<br>
<br>
make a postgresql database named 'team1' and a user named 'team1user' and password 'password'<br>
the username , password and database name can be altered in the TeamProject1/settings file<br>
<br>
make sure you are in the environment when running the server run:<br>
source venv/bin/activate (for linux users)<br>
not sure how to do this on other devices<br>
<br>
if you do not have the venv directory find out how to make a python venv directory online<br>
or pycharm makes one for you if you go to project settings -> interpreter -> click + on the dropdown<br>
<br>
once in the eviroment and the database active e.t.c. run the following:<br>
(from the directory with manage.py)<br>
(not sure in which order the two bellow should be run, try both orders :D)<br>
python3 manage.py makemygrations<br>
ptyhon3 manage.py migrate<br>
<br>
python3 manage.py runserver<br>
<br>
server will be running on localhost:8000<br>
debugging is on, <br>
the url's available will be displayed bellow.<br>



# django_project
