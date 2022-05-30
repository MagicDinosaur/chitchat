from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
TokenVerifyView
)
urlpatterns = [
    path('user/register/', views.RegisterView),
    # path('user/login', views.LoginView),
    path('user/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/logout/', views.LogoutView),
    path('chats', views.ChatView.as_view()),
    path('chats/<uri>/', views.ChatView.as_view()),
    path('chats/<uri>/messages/', views.ChatMessageView.as_view()),
]
