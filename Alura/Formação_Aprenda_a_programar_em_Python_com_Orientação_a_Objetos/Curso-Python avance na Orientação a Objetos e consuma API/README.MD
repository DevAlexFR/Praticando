py -m venv .venv
./.venv/scripts/activate.ps1

pip install ...


--------------


pip freeze > requirements.txt

python -m pip cache purge

pip install -r requirements.txt


--------------


<!-- modelo API com flask alura: -->
from flask import Flask

app = Flask(__name__)

@app.route('/api')
def ola_mundo():
    return 'Olá Mundo!'

if __name__ == '__main__':
    app.run()


<!-- modelo API com Django alura: -->
from django.http import JsonResponse
from django.views import View

class MinhaAPI(View):
    def get(self, request):
        return JsonResponse({'message': 'Olá mundo!'})


<!-- modelo API com fastapi  alura: -->
from fastapi import FastAPI

app = FastAPI()

@app.get("/api")
def ola_mundo():
    return {"message": "Olá Mundo!"}
