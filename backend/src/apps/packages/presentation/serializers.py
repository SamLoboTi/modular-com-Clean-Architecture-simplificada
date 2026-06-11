from rest_framework import serializers

from apps.packages.domain.entities import FlightLeg, TravelPackage


class FlightLegSerializer(serializers.Serializer):
    label = serializers.CharField()
    airline = serializers.CharField()
    flight_number = serializers.CharField()
    origin_code = serializers.CharField()
    origin_city = serializers.CharField()
    destination_code = serializers.CharField()
    destination_city = serializers.CharField()
    departure_time = serializers.CharField()
    arrival_time = serializers.CharField()
    duration = serializers.CharField()


class TravelPackageSerializer(serializers.Serializer):
    id = serializers.CharField()
    title = serializers.CharField()
    route = serializers.CharField()
    travelers = serializers.IntegerField()
    base_price = serializers.IntegerField()
    taxes = serializers.IntegerField()
    airline_reference_price = serializers.IntegerField()
    hotel_name = serializers.CharField()
    nights = serializers.IntegerField()
    legs = FlightLegSerializer(many=True)

    @classmethod
    def from_domain(cls, packages: list[TravelPackage]) -> "TravelPackageSerializer":
        return cls(packages, many=True)
