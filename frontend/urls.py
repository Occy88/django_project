from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

# ----------URL'S AVAILABLE FOR ACTIVITIES RELATED TO USER MODEL SPECIFICALLY-------------
app_name = 'frontend'
urlpatterns = [
    url(r'^/$', views.ServeApp.as_view(), name='home'),
    url(r'^$', views.ServeApp.as_view(), name='home'),

]
urlpatterns = format_suffix_patterns(urlpatterns)
