from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

# ----------URL'S AVAILABLE FOR ACTIVITIES RELATED TO USER MODEL SPECIFICALLY-------------
app_name = 'post_manager'
urlpatterns = [
    # path('stock_detail/', views.StockList.as_view()),
    path('/', views.PostList.as_view()),
    path('with_images/', views.PostDetailWithImages.as_view()),
    path('<int:pk>', views.PostDetail.as_view()),
    path('images/', views.ImageList.as_view()),
    path('images/<int:pk>', views.ImageDetail.as_view()),

]
urlpatterns = format_suffix_patterns(urlpatterns)
