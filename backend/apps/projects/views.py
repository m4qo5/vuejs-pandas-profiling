from django.shortcuts import render
from .serializers import ProjectFileSerializer, ProjectSerializer
from .models import Project, ProjectFile
from rest_framework import mixins, viewsets


class ProjectViewSet(mixins.ListModelMixin,
                      viewsets.GenericViewSet,
                      mixins.CreateModelMixin,
                      mixins.UpdateModelMixin,
                      mixins.RetrieveModelMixin):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()


class ProjectFileViewSet(mixins.ListModelMixin,
                      viewsets.GenericViewSet,
                      mixins.CreateModelMixin,
                      mixins.UpdateModelMixin,
                      mixins.RetrieveModelMixin):
    serializer_class = ProjectFileSerializer
    queryset = ProjectFile.objects.all()