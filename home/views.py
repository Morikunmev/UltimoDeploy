from django.shortcuts import render
from django.http import JsonResponse
from .models import Producto

def home_view(request):
    return render(request, 'home.html')

def producto_list(request):
    productos = Producto.objects.all()
    data = [{
        'id': producto.id,
        'title': producto.titulo,
        'price': float(producto.precio),
        'originalPrice': float(producto.precio_original),
        'discount': producto.descuento,
        'image': producto.imagen
    } for producto in productos]
    return JsonResponse(data, safe=False)