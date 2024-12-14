from django.contrib import admin

# Register your models here.
from .models import Producto

@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'precio', 'precio_original', 'descuento')
    list_filter = ('descuento',)
    search_fields = ('titulo',)