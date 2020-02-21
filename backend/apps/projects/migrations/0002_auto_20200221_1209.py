# Generated by Django 2.1.1 on 2020-02-21 12:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectfile',
            name='filesize',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='projectfile',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='project_files', to='projects.Project'),
        ),
    ]