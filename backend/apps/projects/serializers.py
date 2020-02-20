from rest_framework import serializers
from .models import Project, ProjectFile


class ProjectFileSerializer(serializers.ModelSerializer):
    file = serializers.SerializerMethodField()

    class Meta:
        model = ProjectFile
        fields = (
            'id',
            'file',
            'description',
            'filesize',
        )

    def get_file(self, project_file):
        request = self.context.get('request')
        file = project_file.file.url
        return request.build_absolute_uri(file)
        

class ProjectSerializer(serializers.ModelSerializer):
    project_files = ProjectFileSerializer(many=True)
    class Meta:
        model = Project
        fields = (
            'id',
            'name',
            'description',
            'version',
            'project_files',
        )