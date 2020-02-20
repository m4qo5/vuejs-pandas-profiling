from rest_framework import routers
from .views import (ProjectViewSet, ProjectFileViewSet)


router = routers.DefaultRouter()

router.register(r'projects', ProjectViewSet, base_name='projects')
router.register(r'project-files', ProjectFileViewSet, base_name='project-files')

urlpatterns = router.urls