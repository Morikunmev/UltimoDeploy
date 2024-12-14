from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('api/productos/', views.producto_list, name='producto-list'),
]