from .models import Todo
from rest_framework import viewsets, permissions
from .serializers import TodoSerializer


class TodoView(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = TodoSerializer

    def get_queryset(self):
        return self.request.user.todo.all()
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)