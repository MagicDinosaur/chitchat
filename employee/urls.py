from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('user/register/',views.RegisterView),
    path('user/login/',views.LoginView),
    # path('create/',views.employee_list),
    # path('employee/', include('employee.urls'))
]
