from django.shortcuts import render
from django.views import View
from django.conf import settings
from accounts.models import Profile
import json
from pydoc import locate
from django.core import serializers


# Create your views here.

class ServeApp(View):
    def get(self, request):
        try:
            profile=request.user.profile
        except Exception as e:
            profile=Profile.objects.create(user=request.user)
        return render(request, '../templates/root.html',
                      context={
                          "language": json.dumps(request.user.profile.language),
                          "choices": json.dumps(settings.LANGUAGES),})