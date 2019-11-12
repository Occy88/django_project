
rm -rf company_manager/migrations;
python3 manage.py makemigrations company_manager;
python3 manage.py migrate --fake company_manager zero;
python3 manage.py migrate;

