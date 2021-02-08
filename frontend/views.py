from django.shortcuts import render
from django.views import View


# Create your views here.

class ServeApp(View):
    def get(self, request):
        print("serving app")
        return render(request, '../templates/index.html')
