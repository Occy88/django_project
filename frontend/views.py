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
        if (profile.company == None):
            company_obj = locate(settings.COMPANY_INSTANCE).objects.get(id=1)
            profile.company=company_obj
            profile.save()
        else:
            company_obj = json.loads(serializers.serialize('json', [request.user.profile.company, ]))[0]
            company_obj.update({'id': company_obj['pk']})
        serve_scan_page_only = request.user.groups.all().filter(name="Scan Group").__len__() is not 0
        if serve_scan_page_only:
            serve_scan_page_only = 'true'
        else:
            serve_scan_page_only = 'false'
        return render(request, '../templates/root.html',
                      context={
                          "serve_scan_page_only": serve_scan_page_only,
                          "language": json.dumps(request.user.profile.language),
                          "choices": json.dumps(settings.LANGUAGES),
                          "company": json.dumps(company_obj)})