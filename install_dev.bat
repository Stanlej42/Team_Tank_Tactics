call py -m venv env
cd env 
call Scripts/activate
call python -m pip install Django
cd ..
cd team_tank_tactics
call python manage.py makemigrations 
call python manage.py migrate
