from rest_framework.response import Response
from rest_framework.views import APIView

from apps.packages.application.use_cases import list_featured_packages
from apps.packages.presentation.serializers import TravelPackageSerializer


class FeaturedPackagesView(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request):
        packages = list_featured_packages()
        serializer = TravelPackageSerializer.from_domain(packages)
        return Response({"results": serializer.data})
