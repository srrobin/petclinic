from django.shortcuts import render,redirect
from .forms import OwnerForm,PetForm,VisitForm
from .models import Owner,Pet

from django.shortcuts import get_object_or_404
from django.db.models import Q
from django.contrib import messages

from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.template import Context
from django.template.loader import get_template
from django.utils.html import escape
from xhtml2pdf import pisa
from io import StringIO, BytesIO
from django.contrib.auth.decorators import login_required




def getPdfPage(request, owner_id):
    owner = Owner.objects.get(pk=owner_id)
    data={'owner':owner}
    template=get_template("pdf.html")
    data_p=template.render(data)
    response=BytesIO()

    pdfPage=pisa.pisaDocument(BytesIO(data_p.encode("UTF-8")),response)
    if not pdfPage.err:
        return HttpResponse(response.getvalue(),content_type="application/pdf")
    else:
        return HttpResponse("Error Generating PDF")





def all_owners(request):
    if 'last_name' in request.GET:
        all_owners = Owner.objects.filter(last_name__icontains=request.GET['last_name'])
    else:
        all_owners = Owner.objects.all()
    return render(request,'owner/list.html', {'all_owners_list': all_owners})


def owner(request, owner_id):
    owner = Owner.objects.get(pk=owner_id)
    return render(request,'owner/owner.html', {'owner': owner})


def find_owners(request):
    if request.method == 'POST':
        srch = request.POST['srh']
        if srch:
            match = Owner.objects.filter(Q(city__icontains=srch) | Q(first_name__icontains=srch))
            if match:
                return render(request,'owner/ownersearch.html',{'sr':match})
            else:
                messages.error(request,'no result found')
        else:
            return redirect('/search/')
    return render(request,'owner/ownersearch.html' )


def add_owner(request):
    forms = OwnerForm()
    if request.method == 'POST':
        forms = OwnerForm(request.POST)
        if forms.is_valid():
            owner=forms.save(commit=False)
            owner.save()
            return redirect('owner',owner_id=owner.id)
    return render(request,'owner/owneradd.html',{'forms':forms})



def owner_edit(request,owner_id):
    owner = Owner.objects.get(pk=owner_id)

    forms = OwnerForm(request.POST or None,instance=owner)
    if request.method == 'POST':
        if forms.is_valid():
            owner = forms.save(commit=False)
            owner.save()
            return redirect('owner', owner_id=owner.id)
    return render(request, 'owner/owneredit.html', {'forms': forms})



def add_pet(request,owner_id):
    owner = Owner.objects.get(pk=owner_id)
    owner_instance = get_object_or_404(Owner, pk=owner_id)
    forms = PetForm()
    if request.method == 'POST':
        forms = PetForm(request.POST)
        if forms.is_valid():
            pet=forms.save(commit=False)
            pet.save()
            return redirect('owner',owner_id=owner_instance.id)


    return render(request, 'owner/petadd.html',{'forms': forms,'owner':owner} )


def add_visit(request,owner_id):
    owner_instance = get_object_or_404(Owner, pk=owner_id)
    forms = VisitForm()
    if request.method == 'POST':
        forms = VisitForm(request.POST)
        if forms.is_valid():
            visit=forms.save(commit=False)
            visit.save()
            return redirect('owner',owner_id=owner_instance.id)

    return render(request, 'owner/visitadd.html',{'forms': forms} )








