from rest_framework import serializers
from .models import Post, Image
import sys
from django.contrib.auth.models import Group
from django.conf import settings
from pydoc import locate
import inspect
from guardian.shortcuts import assign_perm, remove_perm
from django_extras.templates import generic_serializer

PostSerializer = generic_serializer(Post)
ImageSerializer = generic_serializer(Image)
PostSerializerWithImages = generic_serializer(Post, related_many_serializers=[ImageSerializer])
