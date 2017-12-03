from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

class LoveMessage(models.Model):
    user = models.ForeignKey(User, related_name='loveMessage')
    recorded_at = models.DateTimeField(default=timezone.now, editable=False)
    topic = models.CharField(max_length=128)
    note = models.TextField(blank=True, default='')

    def __str__(self):
        return '{} : {}'.format(self.recorded_at.strftime('%Y-%m-%d %H:%M:%S'), self.topic)

    class Meta:
        ordering = ['-recorded_at']