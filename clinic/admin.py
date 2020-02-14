from django.contrib import admin
from .models import Owner,PetType,Pet,Visit


admin.site.register(Owner)
admin.site.register(PetType)
admin.site.register(Pet)
admin.site.register(Visit)