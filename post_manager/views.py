from rest_framework import generics

from .helper import query_to_dict_clean
from .models import Image, Post
from .serializers import PostSerializer, PostSerializerWithImages, ImageSerializer


class PostList(generics.ListCreateAPIView):
    """
    This returns the serialized list of companies to which the user
    has permission, i.e. user checked against each company

    """
    serializer_class = PostSerializer

    def get_queryset(self):
        """
        Only returns the query set for said company
        :return:
        """
        data = query_to_dict_clean(self.request.query_params)
        queryset = Post.objects.all().filter(**data)
        return queryset

        # return Company.objects.all()


class PostDetail(generics.ListCreateAPIView):
    """
    This returns the serialized list of companies to which the user
    has permission, i.e. user checked against each company

    """
    serializer_class = PostSerializer

    def get_queryset(self):
        queryset = Post.objects.all()
        return queryset


class ImageList(generics.ListCreateAPIView):
    """
    This returns the serialized list of companies to which the user
    has permission, i.e. user checked against each company

    """
    serializer_class = ImageSerializer

    def get_queryset(self):
        """
        Only returns the query set for said company
        :return:
        """
        data = query_to_dict_clean(self.request.query_params)
        queryset = Post.objects.all().filter(**data)
        return queryset

        # return Company.objects.all()


class ImageDetail(generics.ListCreateAPIView):
    """
    This returns the serialized list of companies to which the user
    has permission, i.e. user checked against each company

    """
    serializer_class = ImageSerializer

    def get_queryset(self):
        queryset = Post.objects.filter(pkid=self.kwargs.get('id'), )
        return queryset


class PostDetailWithImages(generics.ListCreateAPIView):
    serializer_class = PostSerializerWithImages

    def get_queryset(self):
        """
        Only returns the query set for said company
        :return:
        """
        queryset = Image.objects.all()
        if self.request.method == "GET":
            data = query_to_dict_clean(self.request.query_params)
            queryset = queryset.filter(**data)
        return queryset
