from django.db import models

class DesignRequest(models.Model):
    request_id = models.CharField(max_length=50)
    request_date = models.DateField()
    requester_name = models.CharField(max_length=100)
    status = models.CharField(max_length=30)
    design_start_date = models.DateField()
    design_end_date = models.DateField()
    assigned_to = models.CharField(max_length=50)

    organization = models.CharField(max_length=100)
    product_name = models.CharField(max_length=100)
    remarks = models.TextField(blank=True)

    def __str__(self):
        return self.request_id
