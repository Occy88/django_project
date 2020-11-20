"""
list of users
add/delete user
user change his language
list of groups
register users to groups
(group creation is done in admin?)
"""
from .models import Profile, User
from .serializers import ProfileSerializer, UserSerializer, GroupSerializer
# from .forms import SendEmailForm
from django.contrib.auth.models import Group
from rest_framework import generics, permissions
from rest_framework.response import Response
from guardian.shortcuts import remove_perm, get_objects_for_user, assign_perm, get_groups_with_perms
import django_filters.rest_framework
from django.conf import settings
from pydoc import locate
from django.shortcuts import get_object_or_404
from rest_framework.exceptions import PermissionDenied
from django.http import JsonResponse
from django.views import View
from django.views.generic.edit import FormView

import json

UNSUCCESSFUL_RESPONSE = {
    'success': False,
    'message': 'FAILURE '
}
SUCCESSFUL_RESPONSE = {
    'success': True,
    'message': 'SUCCESS'
}


#
# class UserObjectLevelPermission(permissions.BasePermission):
#     """
#        A Permission class to authenticate the user to an object
#        """
#
#     def has_permission(self, request, view):
#         path_items = view.kwargs.get('object_permission_id', None)
#         object_instance = locate(settings.USER_OBJECT_PERMISSION_INSTANCE).objects.get(pk=path_items)
#         if request.user.has_perm(settings.USER_OBJECT_PERMISSION, object_instance):
#             return True
#         else:
#             raise PermissionDenied({"message": "You are not authenticated to this the entity receiving the delivery",
#                                     "object_permission_id": object_instance.id})
#

class UserList(generics.ListCreateAPIView):
    """
    Returns all users that are within th groups that the requesting user is registered to.
    Requesting user also has to have permission to view and modify accounts/groups...
    """
    serializer_class = UserSerializer
    permission_classes = (permissions.DjangoModelPermissions,)

    def get_queryset(self):
        """
        Only returns the query set for said company
        :return:
        """
        object_perm_groups = get_objects_for_user(self.request.user, settings.USER_OBJECT_PERMISSION)
        groups = self.request.user.groups.all()
        users = User.objects.filter(
            groups__in=Group.objects.filter(name__in=object_perm_groups.values_list("name"))).filter(
            groups__in=groups).distinct('id')
        return users

        # return Company.objects.all()


class UserDetail(generics.RetrieveUpdateAPIView):
    """
    Returns the details concerning a user
    """
    serializer_class = UserSerializer
    permission_classes = (permissions.DjangoModelPermissions,)

    def get_queryset(self):
        object_perm_groups = get_objects_for_user(self.request.user, settings.USER_OBJECT_PERMISSION)
        groups = self.request.user.groups.all()
        users = User.objects.filter(
            groups__in=Group.objects.filter(name__in=object_perm_groups.values_list("name"))).filter(
            groups__in=groups).distinct('id')
        return users


class GroupList(generics.ListCreateAPIView):
    """
    Returns all groups to which a user is registered to
    """
    serializer_class = GroupSerializer
    permission_classes = (permissions.DjangoModelPermissions,)

    def get_queryset(self):
        """
        Only returns the query set for said company
        :return:
        """

        return self.request.user.groups.all()

        # return Company.objects.all()


class GroupDetail(generics.RetrieveUpdateAPIView):
    """
    returns the details of the group to which the user is registered
    """
    serializer_class = GroupSerializer
    permission_classes = (permissions.DjangoModelPermissions)

    def get_queryset(self):
        self.request.user.groups.all()


class LanguageChoices(View):
    def get(self, request):
        return JsonResponse({"languages": settings.LANGUAGES})


class CurrentLanguage(View):
    def get(self, request):
        for choice in settings.LANGUAGES:
            if request.user.profile.language == choice[0]:
                return JsonResponse({"language": choice})

    def post(self, request):
        data = json.loads(request.body)
        if "language" in data and "code" in data:
            for choice in settings.LANGUAGES:
                if data["code"] == choice[0]:
                    request.user.profile.language = choice[0]
                    request.user.profile.save()
                    return JsonResponse(SUCCESSFUL_RESPONSE)
        return JsonResponse(UNSUCCESSFUL_RESPONSE)


class CurrentCompany(View):
    def post(self, request):
        data = json.loads(request.body)
        if "id" in data:
            if request.user.has_perm(settings.COMPANY_OBJECT_PERMISSION,
                                     locate(settings.COMPANY_INSTANCE).objects.get(pk=data['id'])):
                request.user.profile.company_id = data['id']
                request.user.profile.save()
                print("SUCCESSFULLY CHANGED COMPANY")
                return JsonResponse(SUCCESSFUL_RESPONSE)
            else:
                print("FAIL TO CHANGED COMPANY")

                raise PermissionDenied({"message": "You are not authenticated with the company of this stock",
                                        "company_pk": data['id']})

        return JsonResponse(UNSUCCESSFUL_RESPONSE)

