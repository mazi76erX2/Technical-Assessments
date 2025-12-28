from django.db import models
from utils.models import Property as P
from utils.models import PropertyDetails as PDetails


class Property(P, models.Model):
    """Model for a property"""

    scheme_name = models.CharField(max_length=100)


class PropertyDetails(PDetails, models.Model):
    """Model for a property details"""

    property = models.ForeignKey(Property, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.property} - {self.rate_number}"
