from django.db import models


class Specialties(models.Model):
    title = models.CharField(max_length=128)

    def __str__(self):
        return self.title



class Veterinarians(models.Model):
    name = models.CharField(max_length=128)
    specialtie =models.ForeignKey(Specialties,on_delete=models.CASCADE)

    def __str__(self):
        return self.name
