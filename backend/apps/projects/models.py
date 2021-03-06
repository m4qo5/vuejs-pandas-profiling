from django.db import models
from django.core.validators import FileExtensionValidator
from hurry.filesize import size as convert_to_megabytes
from hurry.filesize import verbose


class Project(models.Model):
    name = models.CharField(max_length=255, unique=True)
    version = models.PositiveIntegerField()
    description = models.TextField()
    image = models.ImageField(upload_to='project_images')

    def __str__(self):
        return self.name


class ProjectFile(models.Model):
    project = models.ForeignKey(Project, related_name='project_files', on_delete=models.CASCADE)
    file = models.FileField(upload_to='project_files', validators=[FileExtensionValidator(allowed_extensions=['csv'])])
    description = models.TextField()
    filesize = models.CharField(max_length=255, blank=True)
    report = models.FileField(upload_to='project_files/reports', blank=True, validators=[FileExtensionValidator(allowed_extensions=['html'])])

    def __str__(self):
        return self.file.name

    def calculate_filesize(self):
        self.filesize = convert_to_megabytes(self.file.size, system=verbose)  # converting from bytes to megabytes

    def save(self, *args, **kwargs):
        self.calculate_filesize()
        super(ProjectFile, self).save(*args, **kwargs)