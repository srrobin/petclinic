from django.shortcuts import render
from .models import Veterinarians

def v_list(request):
    petdoc_list = Veterinarians.objects.all()
    context = {'lists':petdoc_list}
    return render(request,'petdoc/list.html',context)
