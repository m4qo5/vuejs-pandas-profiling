# Generated by Django 2.1.1 on 2020-03-02 14:00

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0005_auto_20200224_1112'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectfile',
            name='report',
            field=models.FileField(blank=True, upload_to='project_files/reports', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['html'])]),
        ),
    ]