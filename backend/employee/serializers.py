from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import UserChat

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserChat
        fields = ['id', 'name', 'email', 'password','phone','avatar','created_at']
        #hide pw
        extra_kwargs = {
            'password': {'write_only': True}
        }
    #hash password
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = self.Meta.model(**validated_data)
        if password is not None:
            user.set_password(password)
        user.save()
        return user

