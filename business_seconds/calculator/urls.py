"""
URL configuration for calculator app.
"""

from django.urls import path
from . import views

urlpatterns = [
    path('business-seconds/', views.calculate_business_seconds, name='calculate_business_seconds'),
]
