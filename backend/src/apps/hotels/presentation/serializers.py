from rest_framework import serializers

from apps.hotels.domain.entities import Hotel


class HotelSerializer(serializers.Serializer):
    id = serializers.CharField()
    name = serializers.CharField()
    city = serializers.CharField()
    country = serializers.CharField()
    rating = serializers.FloatField()
    price_per_night = serializers.IntegerField()
    image_url = serializers.URLField()

    @classmethod
    def from_domain(cls, hotels: list[Hotel]) -> "HotelSerializer":
        return cls(hotels, many=True)

