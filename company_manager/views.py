from .models import Company
from .serializers import CompanySerializer
from rest_framework import generics, permissions
from rest_framework.response import Response
from guardian.shortcuts import remove_perm, get_objects_for_user, assign_perm
import django_filters.rest_framework
from rest_framework.parsers import FileUploadParser
from django.conf import settings
from pydoc import locate
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.exceptions import PermissionDenied
from django.views import View
from rest_framework import status
from .helper import query_to_dict_clean


class CompanyPermissions(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.has_perm(settings.COMPANY_OBJECT_PERMISSION, Company.objects.get(pk=int(view.kwargs["pk"]))):
            return True
        else:
            raise PermissionDenied({"message": "You are not authenticated with the company",
                                    "company_pk": Company.objects.get(view.kwargs["pk"])})


class RegisterUserToCompany(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    def get_queryset(self):
        try:
            assign_perm(settings.COMPANY_OBJECT_PERMISSION, self.request.user,
                        Company.objects.get(pk=self.kwargs["pk"]))
        except Exception as e:
            print("exception=============== ", e)
        return Company.objects.get(pk=self.kwargs["pk"])


class CompanyList(generics.ListCreateAPIView):
    """
    This returns the serialized list of companies to which the user
    has permission, i.e. user checked against each company

    """
    serializer_class = CompanySerializer
    permission_classes = (permissions.DjangoModelPermissions,)

    def get_queryset(self):
        """
        Only returns the query set for said company
        :return:
        """
        data = query_to_dict_clean(self.request.query_params)

        objects = get_objects_for_user(self.request.user, settings.COMPANY_OBJECT_PERMISSION)
        objects = objects.filter(**data)
        return objects

        # return Company.objects.all()


class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    This returns the list of shipments for a shipment site of a given supplier
    for a given company
    """
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = (CompanyPermissions, permissions.DjangoModelPermissions,)
    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):
        if "logo" in request.data and not request.data['logo'] == '':
            comp = Company.objects.get(pk=self.kwargs.get("pk"))
            comp.logo = request.data["logo"]
            comp.save()
            return Response(comp, status=status.HTTP_201_CREATED)

        if "is_active" in request.data and request.user.is_superuser and not request.data['is_active'] == '':
            comp = Company.objects.get(pk=self.kwargs.get("pk"))
            comp.is_active = 'true' == request.data["is_active"]
            comp.save()
            return Response(comp, status=status.HTTP_201_CREATED)
        else:
            return Response("404", status=status.HTTP_400_BAD_REQUEST)
