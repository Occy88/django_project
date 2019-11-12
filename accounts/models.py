from django.contrib import admin
from django.contrib.auth.models import User
from django.db import models
from django.conf import settings
from pydoc import locate
from django.conf import settings


# admin.site.register(Truck)
# admin.site.register(Product)
# admin.site.register(StorageZone)
# admin.site.register(StorageZoneUnit)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    language = models.CharField(max_length=10,
                                choices=settings.LANGUAGES,
                                default=settings.LANGUAGE_CODE)
    company = models.ForeignKey(locate(settings.COMPANY_INSTANCE), default=0,on_delete=models.SET_NULL, null=True)
