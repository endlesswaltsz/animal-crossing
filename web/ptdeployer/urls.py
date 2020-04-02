from django.conf.urls import include, url
from rest_framework import routers
from ptdeployer import views

router = routers.DefaultRouter()
router.register(r"user", views.UserViewSet, basename='user')


urlpatterns = [
    url("", include(router.urls)),
]