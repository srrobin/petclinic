from django.urls import path
from . import views


urlpatterns = [
    path('home/', views.home ,name='home' ),
    path('', views.login_user ,name='login' ),
    path('logout/', views.logout_user ,name='logout' ),
    path('register/', views.register_view ,name='register' ),
    path('update/register/', views.update_register ,name='register_update' ),
    path('change/password/', views.change_password_view ,name='change_password' ),

    path('reset-password/', views.PasswordReset.as_view(), name='password_reset'),
    path('reset-password-done/', views.PasswordResetDone.as_view(), name='password_reset_done'),
    path('reset-password/<uidb64>/<token>/', views.PasswordResetConfirm.as_view(), name='password_reset_confirm'),
    path('reset-password-complete/', views.PasswordResetComplete.as_view(), name='password_reset_complete'),
]

