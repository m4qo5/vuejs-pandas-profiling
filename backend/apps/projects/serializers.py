from rest_framework import serializers
from .models import Project, ProjectFile


class ProjectFileListSerializer(serializers.ModelSerializer):
    file = serializers.SerializerMethodField()
    file_name = serializers.SerializerMethodField()

    class Meta:
        model = ProjectFile
        fields = (
            'id',
            'file',
            'description',
            'project',
            'filesize',
            'file_name',
        )

    def get_file(self, project_file):
        request = self.context.get('request')
        file = project_file.file.url
        return request.build_absolute_uri(file)

    def get_file_name(self, project_file):
        request = self.context.get('request')
        file_name = project_file.file.name
        return file_name


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
    project_files = ProjectFileListSerializer(many=True)

    class Meta:
        model = Project
        fields = (
            'id',
            'name',
            'description',
            'version',
            'image',
            'project_files',
        )
    
    def get_image(self, project):
        request = self.context.get('request')
        image = project.image.url
        return request.build_absolute_uri(image)


class ProjectRetrieveSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    project_files = ProjectFileListSerializer(many=True)

    class Meta:
        model = Project
        fields = (
            'id',
            'name',
            'description',
            'version',
            'image',
            'project_files',
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