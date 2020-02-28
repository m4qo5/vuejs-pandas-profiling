from django.shortcuts import render
from .serializers import (ProjectFileListSerializer, ProjectListSerializer,
                          ProjectCreateSerializer, ProjectFileCreateSerializer,
                          ProjectRetrieveSerializer)
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
        if self.action == 'retrieve':
            return ProjectRetrieveSerializer
        return ProjectCreateSerializer
    queryset = Project.objects.all()


class ProjectFileViewSet(mixins.ListModelMixin,
                      viewsets.GenericViewSet,
                      mixins.CreateModelMixin,
                      mixins.UpdateModelMixin,
                      mixins.RetrieveModelMixin):
    def get_serializer_class(self):
        if self.action == 'list':
            return ProjectFileListSerializer
        return ProjectFileCreateSerializer
    queryset = ProjectFile.objects.all()