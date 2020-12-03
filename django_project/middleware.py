import re

from django.conf import settings
from django.contrib.auth import logout
from django.urls import reverse

from . import views

EXEMPT_URLS = [re.compile(settings.LOGIN_URL.lstrip('/'))]
if hasattr(settings, 'LOGIN_EXEMPT_URLS'):
    EXEMPT_URLS += [re.compile(url) for url in settings.LOGIN_EXEMPT_URLS]

STAFF_URLS = []
if hasattr(settings, 'STAFF_URLS'):
    STAFF_URLS += [re.compile(url) for url in settings.STAFF_URLS]


# # ---PREVENT USER FROM ACCESSING UNWANTED PAGES IF NOT LOGGED IN
# class LoginRequiredMiddleware:
#     def __init__(self, get_response):
#         self.get_response = get_response
#
#     def __call__(self, request):
#         response = self.get_response(request)
#         return response
#
#     def process_view(self, request, view_func, view_args, view_kwargs):
#         assert hasattr(request, 'user')
#
#


# ---PREVENT USER FROM ACCESSING UNWANTED PAGES IF NOT LOGGED IN
class LoginRequiredMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response

    def process_view(self, request, view_func, view_args, view_kwargs):
        assert hasattr(request, 'user')
        path = request.path_info.lstrip('/')
        # if not request.user.is_authenticated:
        #     if not any(url.match(path) for url in EXEMPT_URLS):
        #         return redirect(settings.LOGIN_URL)

        print(path)
        url_is_exempt = path in settings.LOGIN_EXEMPT_URLS
        url_is_for_staff_only = any(url.match(path) for url in STAFF_URLS)

        if path == reverse('accounts:logout').lstrip('/'):
            logout(request)
        # if not request.user.is_staff and url_is_for_staff_only:
        #     return views.company_manager_redirect(request)
        print(url_is_exempt)
        if not request.user.is_authenticated and not url_is_exempt:
            return views.login_redirect(request)
