from rest_framework import serializers
from rest_framework import generics
from .helper import query_to_dict_clean
import inspect
from rest_framework import generics, permissions, status, viewsets
from django.conf import settings
from rest_framework.exceptions import PermissionDenied


def generic_serializer(model, related_many_serializers=[]):
    global Model
    Model = model
    global related_many
    related_many = related_many_serializers
    names = [name.Meta.model.__name__.lower() + 's' for name in related_many_serializers]

    class GenericSerializer(serializers.ModelSerializer):
        class Meta:
            print("=========================================")
            model = Model
            fields = [str(h).split('.')[2] for h in model._meta.fields] + names
            print(fields)

        def create(self, validated_data):
            """
            Create and return a new `supplier` instance, given the validated data.
            """
            # validated_data.pop('shipments', None)
            print('====================')
            return self.Meta.model.objects.create(**validated_data)

    c = GenericSerializer
    for index, name in enumerate(names):
        setattr(c, name, related_many_serializers[index])
    return GenericSerializer


def generic_list_view(model, serializer, permission_classes=[]):
    global Model
    Model = model
    global list_serializer
    list_serializer = serializer
    global perms
    perms = permission_classes

    class GenericListView(generics.ListCreateAPIView):
        """
        This returns the serialized list of companies to which the user
        has permission, i.e. user checked against each company
        """
        serializer_class = list_serializer
        model = Model
        permission_classes = perms

        def get_queryset(self):
            """
            Only returns the query set for said company
            :return:
            """
            data = query_to_dict_clean(self.request.query_params)
            queryset = self.model.objects.all().filter(**data)
            return queryset

    return GenericListView
    # return Company.objects.all()


def generic_detail_view(model, serializer, permission_classes=[]):
    global Model
    Model = model
    global detail_serializer
    detail_serializer = serializer
    Model = model
    global perms
    perms = permission_classes

    class GenericDetailView(generics.RetrieveUpdateDestroyAPIView):
        """
        This returns the serialized list of companies to which the user
        has permission, i.e. user checked against each company

        """
        serializer_class = detail_serializer
        model = Model
        permission_classes = perms

        def get_queryset(self):
            print("POST DETAIL REQUEST SENT???")
            queryset = self.model.objects.all()
            return queryset

    return GenericDetailView
    # return Company.objects.all()

# def generic_user_or_group_to_model_assign_revoke_perm(,assign=True):
#     class GenericRegisterToModel(generics.RetrieveUpdateDestroyAPIView):
#         queryset = Company.objects.all()
#         serializer_class = CompanySerializer
#
#         def get_queryset(self):
#             try:
#                 assign_perm(settings.COMPANY_OBJECT_PERMISSION, self.request.user,
#                             Company.objects.get(pk=self.kwargs["pk"]))
#             except Exception as e:
#                 print("exception=============== ", e)
#             return Company.objects.get(pk=self.kwargs["pk"])
#     return GenericRegisterToModel

def generic_permission_class(url_model_pk, model_instance, user_perm):
    class GenericPermission(permissions.BasePermission):
        def has_permission(self, request, view):
            path_items = view.kwargs.get(url_model_pk, None)
            model = model_instance(pk=path_items)
            if request.user.has_perm(user_perm, model):
                return True
            else:
                raise PermissionDenied({"message": "You are not authenticated with the company of this stock",
                                        model.__name__: model.id})

    return GenericPermission
    # class StockHolderPermission(permissions.BasePermission):
    #     def has_permission(self, request, view):
    #         path_items = view.kwargs.get('stock_holder_pk', None)
    #         company = locate(settings.STOCK_HOLDER_INSTANCE).objects.get(pk=path_items)
    #         if request.user.has_perm(settings.STOCK_MANAGER_OBJECT_PERMISSION, company):
    #             return True
    #         else:
    #             raise PermissionDenied({"message": "You are not authenticated with the company of this stock",
    #                                     "stock_holder_pk": company.id})
# class RegisterUserToCompany(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Company.objects.all()
#     serializer_class = CompanySerializer
#
#     def get_queryset(self):
#         try:
#             assign_perm(settings.COMPANY_OBJECT_PERMISSION, self.request.user,
#                         Company.objects.get(pk=self.kwargs["pk"]))
#         except Exception as e:
#             print("exception=============== ", e)
#         return Company.objects.get(pk=self.kwargs["pk"])
#


