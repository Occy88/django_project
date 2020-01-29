from django.contrib.auth.models import Group
from django.db import models
from guardian.shortcuts import assign_perm, remove_perm
from django.conf import settings


class Company(models.Model):
    """
    A Company Object.
    """
    name = models.TextField(unique=True, max_length=200)
    # custom url stored as text for each logo
    logo = models.TextField(max_length=100, null=True, blank=True)
    is_active = models.BooleanField(default=True, db_index=True)

    class Meta:
        permissions = [(settings.COMPANY_IN_APP_PERMISSION, 'is an employee')]

    def delete(self, *args, **kwargs):
        self.is_active = False

    def register_user(self, user, pk):
        assign_perm(settings.COMPANY_OBJECT_PERMISSION, user, self.objects.get(pk=pk))

    def remove_user(self, user, pk):
        remove_perm(settings.COMPANY_OBJECT_PERMISSION, user, self.objects.get(pk=pk))

    def __str__(self):
        return self.name
