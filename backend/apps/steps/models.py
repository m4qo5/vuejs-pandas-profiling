from django.db import models


class ProjectStep(models.Model):
    title = models.CharField(max_length=30, unique=True)
    description = models.CharField(max_length=255)
    picture = models.ImageField(upload_to='StepPictures')

    def __str__(self):
        return self.title
