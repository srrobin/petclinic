from django.urls import path
from . import views
urlpatterns = [
      path('owners/', views.all_owners, name='all_owners'),
      path('owners/search/', views.find_owners, name='find_owners'),
      path('owners/add/', views.add_owner, name='add_owner'),
      path('owners/<owner_id>/edit', views.owner_edit, name='owner_edit'),
      path('owners/<owner_id>/pet/new', views.add_pet, name='add_pet'),
     #path('owners/<owner_id>/pet/<pet_id>/edit/', views.pet_edit, name='pet_edit'),
      path('owners/<owner_id>/visit/', views.add_visit, name='add_visit'),
      path('clinicPdfPage/<owner_id>/', views.getPdfPage, name='get_pdf_std'),
      path('owners/<owner_id>/', views.owner, name='owner'),
]