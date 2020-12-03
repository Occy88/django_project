from django.contrib.auth.models import AnonymousUser
from django.http.response import HttpResponse, HttpResponseNotFound
from django.shortcuts import render, redirect
from django.views import View
from rest_framework import generics

from accounts.models import Profile
from .models import Tool
from .serializers import ToolSerializer


# Create your views here.
class RedirectHome(View):
    def get(self, request):
        return redirect('frontend:home')


class ServeApp(View):
    def get(self, request):
        if type(request.user == AnonymousUser):
            return render(request, '../templates/index.html')
        try:
            profile = request.user.profile
        except Exception as e:
            profile = Profile.objects.create(user=request.user)
        return render(request, '../templates/index.html')


class ToolList(generics.ListCreateAPIView):
    """
    This returns the serialized list of companies to which the user
    has permission, i.e. user checked against each company

    """
    serializer_class = ToolSerializer
    queryset = Tool.objects.all()
    # permission_classes = (permissions.DjangoModelPermissions,)

    # def get_queryset(self):
    #     """
    #     Only returns the query set for said company
    #     :return:
    #     """
    #     # can order and stuff here.
    #     # also can have permissions.
    #     return Tool.objects.all()


class ToolDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    This returns the list of shipments for a shipment site of a given supplier
    for a given company
    """
    queryset = Tool.objects.all()
    serializer_class = ToolSerializer
    # permission_classes = (CompanyPermissions, permissions.DjangoModelPermissions,)
    # parser_class = (FileUploadParser,)


class ServeIcons(View):
    def get(self, request):
        print(request.META['PATH_INFO'])
        try:
            relevant_png = request.META['PATH_INFO'].split('/')[2]
            print(relevant_png)
            image_data = open("frontend/templates/icons/" + relevant_png, "rb").read()
        except:
            return HttpResponseNotFound('<h1>File not found</h1>')
        return HttpResponse(image_data, content_type='image/png')
