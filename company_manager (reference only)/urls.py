from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

# ----------URL'S AVAILABLE FOR ACTIVITIES RELATED TO USER MODEL SPECIFICALLY-------------
app_name = 'company_manager'
urlpatterns = [
    # path('stock_detail/', views.StockList.as_view()),
    path('', views.CompanyList.as_view()),
    path('<int:pk>', views.CompanyDetail.as_view()),
    path('<int:pk>/register_user', views.RegisterUserToCompany.as_view()),

]
urlpatterns = format_suffix_patterns(urlpatterns)
