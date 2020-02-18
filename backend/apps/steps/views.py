from django.shortcuts import render
from .serializers import ProjectStepSerializer
from .models import ProjectStep
from rest_framework import viewsets


class ProjectStepViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectStepSerializer
    queryset = ProjectStep.objects.all() 


