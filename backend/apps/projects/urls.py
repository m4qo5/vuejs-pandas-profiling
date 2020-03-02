from rest_framework import routers
from .views import (ProjectViewSet, ProjectFileViewSet, get_file_data)
from django.urls import path, include, re_path


router = routers.DefaultRouter()

router.register(r'projects', ProjectViewSet, base_name='projects')
router.register(r'project-files', ProjectFileViewSet, base_name='project-files')

urlpatterns = [
    re_path(r'^file-report/(?P<id>[0-9]+)$', get_file_data, name='file-report'),
] + router.urls