from rest_framework import serializers
from .models import ProjectStep


class ProjectStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectStep
        fields = '__all__'