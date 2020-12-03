from rest_framework import serializers
from .models import Tool
from django_extras.templates import generic_serializer

ToolSerializer = generic_serializer(Tool)
