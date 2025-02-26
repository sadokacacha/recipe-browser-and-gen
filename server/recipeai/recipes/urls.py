from django.urls import path
from .views import get_recipes  # Ensure this function exists in views.py

urlpatterns = [
    path('', get_recipes, name='get_recipes'),  # Empty string means it's accessible at /recipes/
]
