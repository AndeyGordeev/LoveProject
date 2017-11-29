from braces.views import SelectRelatedMixin
from django.contrib.auth.models import User
from django.shortcuts import render
from django.contrib.auth import logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect, HttpResponse
from django.template import loader, Context
from django.views import generic

from loveMessage.models import LoveMessage
from . import forms

# Create your views here.
def dashboard(request):
    lovemeassage = LoveMessage.objects.all()
    return render(request, 'user/dashboard.html', locals())

class LogoutView(LoginRequiredMixin, generic.FormView):
    form_class = forms.LogoutForm
    template_name = 'user/logout.html'

    def form_valid(self, form):
        logout(self.request)
        return HttpResponseRedirect(reverse('home'))