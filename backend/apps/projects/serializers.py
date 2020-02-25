from rest_framework import serializers
from .models import Project, ProjectFile


class ProjectFileListSerializer(serializers.ModelSerializer):
    file = serializers.SerializerMethodField()

    class Meta:
        model = ProjectFile
        fields = (
            'id',
            'file',
            'description',
            'project',
        )

    def get_file(self, project_file):
        request = self.context.get('request')
        file = project_file.file.url
        return request.build_absolute_uri(file)


class ProjectFileCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectFile
        fields = (
            'id',
            'file',
            'description',
            'project'
        )


class ProjectListSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = (
            'id',
            'name',
            'description',
            'version',
            'image',
        )
    
    def get_image(self, project):
        request = self.context.get('request')
        image = project.image.url
        return request.build_absolute_uri(image)


class ProjectCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = (
            'id',
            'name',
            'description',
            'version',
            'image',
        )