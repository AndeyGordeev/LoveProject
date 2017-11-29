from django.shortcuts import render
from django.contrib.auth import logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect
from django.views import generic
from . import forms

# Create your views here.
class Dashboard(LoginRequiredMixin, generic.TemplateView):
    template_name = 'user/dashboard.html'

class LogoutView(LoginRequiredMixin, generic.FormView):
    form_class = forms.LogoutForm
    template_name = 'user/logout.html'

    def form_valid(self, form):
        logout(self.request)
        return HttpResponseRedirect(reverse('home'))