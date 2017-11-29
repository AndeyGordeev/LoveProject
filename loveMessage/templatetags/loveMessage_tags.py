from django import template

from loveMessage.forms import LoveForm

register = template.Library()


@register.inclusion_tag('loveMessage/_form.html')
def loveMessage_form():
    form = LoveForm()
    return {'form': form}
