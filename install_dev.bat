call py -m venv env
cd env 
call Scripts/activate
call py -m pip install Django
cd ..
cd team_tank_tactics
call py manage.py makemigrations 
call py manage.py migrate
