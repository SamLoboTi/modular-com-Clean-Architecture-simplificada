from django.db import models


class PackageSnapshot(models.Model):
    title = models.CharField(max_length=180)
    route = models.CharField(max_length=32)
    base_price = models.PositiveIntegerField()
    taxes = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "package snapshot"
        verbose_name_plural = "package snapshots"
