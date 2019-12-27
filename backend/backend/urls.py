from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from backend.apps.todo import api

router = routers.DefaultRouter()
router.register(r'todos', api.TodoView, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
