from django.urls import re_path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

app_name = 'frontend'
urlpatterns = [
    re_path('.*', views.ServeApp.as_view(), name='home')
]
urlpatterns = format_suffix_patterns(urlpatterns)
