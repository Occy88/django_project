rm -rf dist
rm -rf staticfiles
npm install
python3 manage.py collectstatic
