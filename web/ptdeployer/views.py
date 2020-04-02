from django.shortcuts import render
from rest_framework import viewsets
from django.http import JsonResponse
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    authentication_classes = []
    # permission_classes = []
    def create(self, request, *args, **kwargs):
        return JsonResponse({"status": 200, "msg": "ok"})
