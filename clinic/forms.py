from django import forms
from .models import Owner,Pet,Visit



class OwnerForm(forms.ModelForm):

    class Meta:
        model = Owner
        fields = '__all__'

        widgets = {
            'first_name': forms.TextInput(attrs={'class': 'form-control'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control'}),
            'address': forms.Textarea(attrs={'class': 'form-control','rows':4, 'cols': 10}),
            'city': forms.TextInput(attrs={'class': 'form-control'}),
            'telephone': forms.TextInput(attrs={'class': 'form-control'})
        }



class PetForm(forms.ModelForm):

    class Meta:
        model = Pet
        fields = '__all__'
        #exclude = ('owner',)

        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'birth_date': forms.TextInput(attrs={'class': 'form-control'}),
            'owner': forms.Select(attrs={'class': 'form-control'}),
            'pet_type': forms.Select(attrs={'class': 'form-control'})
        }







class VisitForm(forms.ModelForm):

    class Meta:
        model = Visit
        fields = '__all__'

        widgets = {
            'visit_date': forms.TextInput(attrs={'class': 'form-control'}),
            'description': forms.TextInput(attrs={'class': 'form-control'}),
            'pet': forms.Select(attrs={'class': 'form-control'})
        }