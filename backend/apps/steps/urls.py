from rest_framework import routers
from .views import (ProjectStepViewSet)


router = routers.DefaultRouter()

router.register(r'steps', ProjectStepViewSet, base_name='steps')

urlpatterns = router.urls