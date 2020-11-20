from django.shortcuts import render
from django.views import View
from django.conf import settings
from accounts.models import Profile
from django.contrib.auth.models import User
import json
from pydoc import locate
from django.core import serializers
from rest_framework import generics


# Create your views here.

class ServeApp(View):
    def check_create_profile(self, user):
        print("Serving app...")
        print("Checking user has profile")
        try:
            profile = user.profile
        except Exception as e:
            try:
                print('user has no profile, creating one :D')
                profile = Profile.objects.create(user=user)
                if (profile.company == None):
                    company_obj = locate(settings.COMPANY_INSTANCE).objects.get(name='some_company')
                    profile.company = company_obj
                    profile.save()
                print("profile created :D")
            except:
                print("wrong user type")


    def get_languages(self, user):
        try:
            return user.profile.language
        except:
            return 'en-us'

    def get(self, request):
        print(request.user)
        self.check_create_profile(request.user)
        language = json.dumps(self.get_languages(request.user))
        choices = json.dumps(settings.LANGUAGES)

        return render(request, '../templates/root.html',
                      context={
                          "language": language,
                          "choices": choices})
