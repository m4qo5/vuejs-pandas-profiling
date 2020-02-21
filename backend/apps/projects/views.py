from django.shortcuts import render
from .serializers import ProjectFileSerializer, ProjectListSerializer, ProjectCreateSerializer
from .models import Project, ProjectFile
from rest_framework import mixins, viewsets


class ProjectViewSet(mixins.ListModelMixin,
                      viewsets.GenericViewSet,
                      mixins.CreateModelMixin,
                      mixins.UpdateModelMixin,
                      mixins.RetrieveModelMixin):

    def get_serializer_class(self):
        if self.action == 'list':
            return ProjectListSerializer
        return ProjectCreateSerializer
    queryset = Project.objects.all()


class ProjectFileViewSet(mixins.ListModelMixin,
                      viewsets.GenericViewSet,
                      mixins.CreateModelMixin,
                      mixins.UpdateModelMixin,
                      mixins.RetrieveModelMixin):
    serializer_class = ProjectFileSerializer
    queryset = ProjectFile.objects.all()