from rest_framework.response import Response
from rest_framework.views import APIView

from apps.hotels.application.use_cases import list_featured_hotels
from apps.hotels.presentation.serializers import HotelSerializer


class FeaturedHotelsView(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request):
        hotels = list_featured_hotels()
        serializer = HotelSerializer.from_domain(hotels)
        return Response({"results": serializer.data})

