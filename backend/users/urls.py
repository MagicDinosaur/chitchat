from django.urls import path
from . import views

urlpatterns = [
    path('user/register/', views.RegisterView),
    path('user/login/', views.LoginView),
    path('user/logout/', views.LogoutView),

    path('chats/', views.ChatView.as_view()),
    path('chats/<uri>/', views.ChatView.as_view()),
    path('chats/<uri>/messages/', views.ChatMessageView.as_view()),
]
