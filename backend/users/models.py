from uuid import uuid4

from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.conf import settings
from django.contrib.auth.models import UserManager
class UserChat(AbstractBaseUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    phone = models.CharField(null=True, max_length=255)
    avatar = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [name, email, password]
    objects = UserManager()
    class Meta:
        db_table = "users"


def get_user_info(user):
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
        abstract = True


class ChatRoom(TrackDate):
    """ A Chat Room with owner and uri """
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    uri = models.URLField(default=generate_chat_uri())


class ChatRoomMessage(TrackDate):
    """Store messages."""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    chat_room = models.ForeignKey(ChatRoom, related_name="messages", on_delete=models.PROTECT)
    message = models.TextField(max_length=2000)

    def converse_info(self):
        return {
            'user': get_user_info(self.user),
            'message': self.message
        }

class ChatRoomMember(TrackDate):

    chat_room = models.ForeignKey(ChatRoom, related_name="members",on_delete=models.PROTECT)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.PROTECT)


