from django.urls import path
from django.urls import re_path
from django.views.generic import TemplateView
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

# ----------URL'S AVAILABLE FOR ACTIVITIES RELATED TO USER MODEL SPECIFICALLY-------------
app_name = 'frontend'
urlpatterns = [
    path('sw.js', (TemplateView.as_view(template_name="frontend/templates/sw.js",
                                        content_type='application/javascript', )), name='sw.js'),
    path('manifest.webmanifest', (TemplateView.as_view(template_name="frontend/templates/manifest.webmanifest",
                                                       content_type='application/javascript', )),
         name='manifest.webmanifest'),

    re_path('icons/.*', views.ServeIcons.as_view()),

    path('tools/', views.ToolList.as_view()),
    path('tools/<int:pk>', views.ToolDetail.as_view()),
    re_path('.*', views.ServeApp.as_view(), name='home'),
    # path('',views.RedirectHome.as_view(),)
]
urlpatterns = format_suffix_patterns(urlpatterns)
