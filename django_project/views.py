from django.shortcuts import redirect
from .default_database_objects import *


def login_redirect(request):
    return redirect('/accounts/login')


def view_404(request,exception):
    # make a redirect to homepage
    # you can use the name of url or just the plain link
    return redirect('/visualizer')  # or redirect('name-of-index-url')
