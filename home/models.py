from django.db import models

# Create your models here.
class Producto(models.Model):
    titulo = models.CharField(max_length=200)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    precio_original = models.DecimalField(max_digits=10, decimal_places=2)
    descuento = models.IntegerField()
    imagen = models.URLField()
    
    def __str__(self):
        return self.titulo