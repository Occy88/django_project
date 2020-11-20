from rest_framework import serializers
from .models import Post, Image
from django.contrib.auth.models import Group
from django.conf import settings
from pydoc import locate

from guardian.shortcuts import assign_perm, remove_perm


class PostSerializer(serializers.ModelSerializer):
    # to work out all the fk relationships be clever about what to show...
    # perhaps nothing?
    # perhaps Groups?

    # shipment_sites = serializers.PrimaryKeyRelatedField(many=True, queryset=ShipmentSite.objects.all())

    class Meta:
        model = Post
        fields = ('id', 'title', 'content','source','is_active' )

    def create(self, validated_data):
        """
        Create and return a new `supplier` instance, given the validated data.
        """
        # validated_data.pop('shipments', None)
        print('====================')
        model = Post.objects.create(**validated_data)

        return model


class ImageSerializer(serializers.ModelSerializer):
    # to work out all the fk relationships be clever about what to show...
    # perhaps nothing?
    # perhaps Groups?

    # shipment_sites = serializers.PrimaryKeyRelatedField(many=True, queryset=ShipmentSite.objects.all())

    class Meta:
        model = Image
        fields = ('id', 'post', 'image', 'is_active')

    def create(self, validated_data):
        """
        Create and return a new `supplier` instance, given the validated data.
        """
        # validated_data.pop('shipments', None)
        model = Image.objects.create(**validated_data)
        return model


class PostSerializerWithImages(serializers.ModelSerializer):
    images = ImageSerializer(many=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'content','source','is_active','images' )
