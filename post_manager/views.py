from rest_framework import generics
from django_extras.templates import generic_detail_view, generic_list_view
from django_extras.helper import query_to_dict_clean
from .models import Image, Post
from .serializers import PostSerializer, PostSerializerWithImages, ImageSerializer

PostList = generic_list_view(Post, PostSerializer)
PostDetail = generic_detail_view(Post, PostSerializer)
ImageList = generic_list_view(Image, ImageSerializer)
ImageDetail = generic_detail_view(Image, ImageSerializer)
PostDetailWithImages = generic_detail_view(Post, PostSerializerWithImages)
