from django.urls import path
from . import views

urlpatterns = [
    path('', views.v_list,name='v_list')
]
