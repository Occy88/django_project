from django.conf.urls import url
from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView, PasswordResetView,PasswordResetConfirmView,PasswordResetDoneView
from django.urls import reverse
from . import views

# from accounts.views.group import PermissionManagerPage
from django.contrib.auth import views as auth_views

# ----------URL'S AVAILABLE FOR ACTIVITIES RELATED TO USER MODEL SPECIFICALLY-------------
app_name = 'accounts'
urlpatterns = [
    url(r'^login/$', LoginView.as_view(), {'template_name': 'accounts/templates/registration/login.html'},
        name='login'),
    url(r'^logout/$', LogoutView.as_view(), {'template_name': 'accounts/templates/registration/logout.html'},
        name='logout'),
    url(r'^password_reset/$', PasswordResetView.as_view(),
        {'template_name': 'accounts/templates/registration/password_reset.html'},
        name='password_reset'),
    url(r'^password_reset/done/$', PasswordResetDoneView.as_view(), name='password_reset_done'),
    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    # we are using object level permissions, so need to provide id of the object to which the
    path('languages', views.LanguageChoices.as_view()),
    path('languages/current', views.CurrentLanguage.as_view()),
    path('company/current', views.CurrentCompany.as_view()),

    path('user_list', views.UserList.as_view()),
    path('user_detail/<int:pk>', views.UserDetail.as_view()),
    path('group_list', views.GroupList.as_view()),
    path('group_detail', views.GroupDetail.as_view()),
]
