from django.db import models


class Owner(models.Model):
    first_name = models.CharField(max_length=128)
    last_name = models.CharField(max_length=128)
    address = models.CharField(max_length=256)
    city = models.CharField(max_length=128)
    telephone = models.CharField(max_length=20)

    def __str__(self):
        return self.first_name + " " + self.last_name



class PetType(models.Model):
    name = models.CharField(max_length=128)

    def __str__(self):
        return "Pet type: " + self.name


class Pet(models.Model):
    name = models.CharField(max_length=128)
    birth_date = models.DateField(auto_now=False, null=True, blank=True)
    owner = models.ForeignKey(Owner,on_delete=models.CASCADE)
    pet_type = models.ForeignKey(PetType,on_delete=models.CASCADE)

    def __str__(self):
        return self.name + " is a " + self.pet_type.name + " and belongs to " + self.owner.first_name + "  " + self.owner.last_name


class Visit(models.Model):
    visit_date = models.DateField(auto_now_add=True)
    description = models.TextField()
    pet = models.ForeignKey(Pet,on_delete=models.CASCADE)

    def __str__(self):
          return self.pet.name  + " owner of "+ self.pet.owner.first_name + " " + self.pet.owner.last_name


