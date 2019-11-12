from django.contrib.auth.models import Group, Permission
from pydoc import locate
from django.conf import settings

try:
    print("CREATING DEFAULT COMPANY (Seclea)")
    company_model = locate(settings.COMPANY_INSTANCE)
    print(company_model)
    seclea = company_model.objects.get_or_create(name="Seclea", logo='company_manager/static/company_manager/logo/seclea.png')
    print("CREATING DEFAULT GROUPS")
    from django.db.models import Q

    # Group for people working in office with access to reports:
    # Group name= Logistic Administrator
    # Permissions= All except for company related

    # Group name= Scan Group
    # Permissions= Product related,
    # log_admin_group = Group.objects.get_or_create(name="Logistic Administrator")
    # log_admin_group = log_admin_group[0]
    # all_perms = Permission.objects.all()
    #
    # logist_admin_perms = Permission.objects \
    #     .filter(~Q(content_type__app_label='company_manager')) \
    #     .filter(~Q(content_type__app_label='admin')) \
    #     .filter(~Q(content_type__app_label='sessions')) \
    #     .filter(~Q(content_type__app_label='auth')) \
    #     .filter(~Q(content_type__app_label='contenttypes'))
    # for permission in logist_admin_perms:
    #     log_admin_group.permissions.add(permission)


except Exception as e:
    print("Can't create default Company try running Migrations!")
    print("Can't create default groups try running Migrations")
    print(e)
