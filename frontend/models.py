from django.db import models

# Create your models here.

class Tool(models.Model):
    """
    Item representing data point
    """
    name = models.TextField(max_length=128)
