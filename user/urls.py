from django.conf.urls import url,include

from . import views

urlpatterns = [
    url('^logout/$', views.LogoutView.as_view(), name='logout'),
    url('^dashboard/$', views.Dashboard.as_view(), name='dashboard'),
    url('^', include('django.contrib.auth.urls')),
]