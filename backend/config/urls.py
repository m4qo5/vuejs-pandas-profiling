from django.urls import path
from django.contrib import admin
from django.contrib.auth import logout

from django.conf.urls import include

from config.api import api

apipatterns = [
    path('', include('apps.steps.urls')),
]


urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('logout/', logout, {'next_page': '/'}, name='logout'),
    
    path('api/', include((apipatterns, 'api'), namespace='api')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    
]
