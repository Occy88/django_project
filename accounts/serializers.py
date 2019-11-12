from rest_framework import serializers
from django.contrib.auth.models import User, Group
from .models import Profile
from django.conf import settings
from pydoc import locate
from django.core.mail import send_mail
from django.urls import reverse_lazy, reverse
from django.http import request

class ProfileSerializer(serializers.ModelSerializer):
    # to work out all the fk relationships be clever about what to show...
    # perhaps nothing?
    # perhaps Groups?

    # shipment_sites = serializers.PrimaryKeyRelatedField(many=True, queryset=ShipmentSite.objects.all())

    class Meta:
        model = Profile
        fields = ('id', 'language')

    def create(self, validated_data):
        """
        Create and return a new `supplier` instance, given the validated data.
        """
        # validated_data.pop('shipments', None)
        profile = Profile.objects.create(**validated_data)
        return profile


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('name',)

    def create(self, validated_data):
        group = Group.objects.create(**validated_data)
        return group


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username', 'email', 'groups')

    def create(self, validated_data):
        """
        Create and return a new `supplier` instance, given the validated data.
        """
        # validated_data.pop('shipments', None)
        groups = validated_data.pop("groups")

        user = User.objects.create(**validated_data)
        for group in groups:
            group.user_set.add(user)
        password = User.objects.make_random_password()
        user.set_password(password)
        user.save()

        send_mail("Polymer Loop",
                  "password:" + password + "\n" + "username:" + user.username + "\n" + "password reset: " + settings.BASE_URL_NO_SLASH + reverse(
                      'password_reset'), from_email=settings.EMAIL_HOST_USER, recipient_list=[user.email])
        user.profile = Profile.objects.create(user=user)
        user.save()
        return user
