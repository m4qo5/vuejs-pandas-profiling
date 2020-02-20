from django.shortcuts import render
from .serializers import ProjectStepSerializer
from .models import ProjectStep
from rest_framework import viewsets, mixins
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_cookie



class ProjectStepViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = ProjectStepSerializer
    queryset = ProjectStep.objects.all()

    @method_decorator(cache_page(60*60*8))
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)


