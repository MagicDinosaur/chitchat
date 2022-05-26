from uuid import uuid4

from django.contrib.auth.models import AbstractBaseUser
from django.db import models


class UserChat(AbstractBaseUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    phone = models.CharField(null=True, max_length=255)
    avatar = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [name, email, password]

    class Meta:
        db_table = "users"


def preserialize_user(user):
    return {
        'id': user.id, 'username': user.name, 'email': user.email,
        # 'first_name': user.first_name, 'last_name': user.last_name
    }


def generate_chat_uri():
    """Generates a unique uri for the chat session."""
    return str(uuid4()).replace('-', '')[:15]


class TrackDate(models.Model):
    """Helper model to Track date for a model."""
    create_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)

    class Meta:
        abstracy = True


class ChatRoom(TrackDate):
    owner = models.ForeignKey(UserChat, on_delete=models.PROTECT)
