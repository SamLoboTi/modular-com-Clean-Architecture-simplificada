from django.urls import path

from .views import FeaturedPackagesView

urlpatterns = [
    path("featured/", FeaturedPackagesView.as_view(), name="featured-packages"),
]
