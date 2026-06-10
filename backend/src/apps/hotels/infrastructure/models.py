from django.db import models


class HotelModel(models.Model):
    name = models.CharField(max_length=160)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    price_per_night = models.PositiveIntegerField()
    image_url = models.URLField(blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "hotel"
        verbose_name_plural = "hotels"

    def __str__(self) -> str:
        return self.name

