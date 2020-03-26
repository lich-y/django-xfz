#! /usr/bin/python

from django.urls import path

from apps.cms import views

app_name = 'cms'

urlpatterns = [
    path('', views.index, name='index')
]
