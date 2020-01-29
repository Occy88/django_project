"""
This app:
Create a delivery, Register products to a delivery
Delete a delivery, Change a delivery (restore a delivery)
It only takes care of the front-end, and has an api with which to work with.
"""
from django.apps import AppConfig


class FrontendConfig(AppConfig):
    name = 'frontend'
