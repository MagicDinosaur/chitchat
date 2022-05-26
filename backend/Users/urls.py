from django.urls import path
from . import views

urlpatterns = [
    path('user/register/', views.RegisterView),
    path('user/login/', views.LoginView),
    path('user/logout/', views.LogoutView),
]
