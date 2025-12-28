from django.db import models


class Property(models.Model):
    """Model for a property"""

    rate_number = models.CharField(max_length=50)
    legal_description = models.CharField(max_length=200)
    address = models.CharField(max_length=100)
    first_owner = models.CharField(max_length=100)
    use_code = models.CharField(max_length=50)
    rating_category = models.CharField(max_length=50)
    market_value = models.DecimalField(max_digits=10, decimal_places=2)
    registered_extent = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.legal_description}"

    class Meta:
        """Meta class for the model"""

        abstract = True
        verbose_name = "Property"
        verbose_name_plural = "Properties"


class PropertyDetails(models.Model):
    """Model for property details"""

    rate_number = models.CharField(max_length=50)
    erf_number = models.CharField(max_length=10)
    government_code = models.CharField(max_length=50)
    exemptions = models.CharField(max_length=50)
    phasing_in = models.CharField(max_length=50)
    sra_code = models.CharField(max_length=50)
    deeds_township_farm = models.CharField(max_length=50)
    rebates = models.CharField(max_length=50)
    exclusions = models.CharField(max_length=50)
    property_type = models.CharField(max_length=50)

    class Meta:
        """Meta class for the model"""

        abstract = True
