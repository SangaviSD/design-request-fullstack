from django.urls import path
from . import views

urlpatterns = [
    path('design-requests/', views.DesignRequestList.as_view(), name='design-requests'),
]
