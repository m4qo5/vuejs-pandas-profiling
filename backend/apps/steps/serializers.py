from rest_framework import serializers
from .models import ProjectStep


class ProjectStepSerializer(serializers.ModelSerializer):
    picture = serializers.SerializerMethodField()

    class Meta:
        model = ProjectStep
        fields = (
            'id',
            'title',
            'description',
            'picture',
        )
    
    def get_picture(self, step):
        request = self.context.get('request')
        picture = step.picture.url
        return request.build_absolute_uri(picture)