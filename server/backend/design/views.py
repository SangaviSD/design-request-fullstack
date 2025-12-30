from rest_framework import viewsets
from .models import DesignRequest
from .serializers import DesignRequestSerializer

class DesignRequestViewSet(viewsets.ModelViewSet):
    queryset = DesignRequest.objects.all()
    serializer_class = DesignRequestSerializer
