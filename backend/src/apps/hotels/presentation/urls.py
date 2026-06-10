from django.urls import path

from .views import FeaturedHotelsView


urlpatterns = [
    path("featured/", FeaturedHotelsView.as_view(), name="featured-hotels"),
]

