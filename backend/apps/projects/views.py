import pandas as pd
import json
from django.shortcuts import render
from .serializers import (ProjectFileListSerializer, ProjectListSerializer,
                          ProjectCreateSerializer, ProjectFileCreateSerializer,
                          ProjectRetrieveSerializer)
from .models import Project, ProjectFile
from rest_framework import mixins, viewsets
from rest_framework.decorators import api_view, renderer_classes
from pandas_profiling import ProfileReport
from rest_framework.response import Response
from rest_framework.renderers import TemplateHTMLRenderer
from django.core.files import File


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


@api_view(['GET'])
@renderer_classes([TemplateHTMLRenderer])
def get_file_data(request, id):
    file = ProjectFile.objects.get(pk=id)
    df = pd.read_csv(file.file)
    profile = ProfileReport(df, title=file.description, html={'style':{'full_width':True}})
    profile.to_file(output_file=f'static/report-{id}.html')
    with open(f'static/report-{id}.html', 'rb') as f:
        report = File(f)
        file.report = report
        file.save()
    return Response(template_name=f'report-{id}.html')



