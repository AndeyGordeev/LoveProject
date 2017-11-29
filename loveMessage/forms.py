from django import forms

from . import models


class LoveForm(forms.ModelForm):
    class Meta:
        fields = ('topic', 'note')
        model = models.LoveMessage