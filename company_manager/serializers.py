from rest_framework import serializers
from .models import Company
from django.contrib.auth.models import Group
from django.conf import settings
from pydoc import locate

from guardian.shortcuts import assign_perm, remove_perm


class CompanySerializer(serializers.ModelSerializer):
    # to work out all the fk relationships be clever about what to show...
    # perhaps nothing?
    # perhaps Groups?

    # shipment_sites = serializers.PrimaryKeyRelatedField(many=True, queryset=ShipmentSite.objects.all())

    class Meta:
        model = Company
        fields = ('id', 'name', 'logo','is_active', )

    def create(self, validated_data):
        """
        Create and return a new `supplier` instance, given the validated data.
        """
        # validated_data.pop('shipments', None)
        company = Company.objects.create(**validated_data)
        company_group = Group.objects.create(name=company.name)
        assign_perm(settings.COMPANY_OBJECT_PERMISSION, company_group,
                    company)
        return company
