from django.urls import path
from django.contrib import admin
from rest_framework_simplejwt import views as jwt_views
from django.conf.urls import include


apipatterns = [
    path('', include('apps.steps.urls')),
    path('', include('apps.projects.urls')),
]

authpatterns = [
    path('', include('djoser.urls')),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]


urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('api/auth/', include((authpatterns, 'auth'), namespace='auth')),
    path('api/', include((apipatterns, 'api'), namespace='api')),
]
