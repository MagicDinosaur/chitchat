from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import (UserChat, ChatRoom, ChatRoomMessage, ChatRoomMember, get_user_info)
from .serializers import UserSerializer, MessageSerializer
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime
from rest_framework.views import APIView
from rest_framework import permissions
from django.core import serializers
from django.forms.models import model_to_dict

import json
@api_view(['POST'])
@permission_classes([AllowAny, ])
def RegisterView(request):
    if request.method == 'POST':
        serializers= UserSerializer(data= request.data)
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return Response(serializers.data)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# @permission_classes([AllowAny, ])
# def LoginView(request):
#     if request.method =='POST':
#         email = request.data['email']
#         password = request.data['password']
#
#         user = UserChat.objects.filter(email=email).first()
#         if user is None:
#             raise AuthenticationFailed('User not found!')
#
#         if not user.check_password(password):
#             raise AuthenticationFailed('Incorrect password!')
#
#         payload = {
#             'id': user.id,
#             'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
#             'iat': datetime.datetime.utcnow()
#         }
#
#         token = jwt.encode(payload, 'secret', algorithm='HS256')
#         response = Response()
#
#         response.set_cookie(key='jwt', value=token, httponly=True)
#         response.data = {
#             'jwt': token
#         }
#         return response

@api_view(['GET'])
def UserView(request):
    if request.method =='GET':
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = UserChat.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)
        return Response(serializer.data)

@api_view(['GET'])
def LogoutView(request):
    if request.method == 'GET':
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response


class ChatView(APIView):
    permissions_classes = (permissions.IsAuthenticated,)

    def post(self,request,*args, **kwargs):
        """create new chat room"""
        user = request.user
        chat_room = ChatRoom.objects.create(owner = user)
        return Response({
            'status' : 'SUCCESS', 'uri': chat_room.uri,
            'message' : 'New room created'
        })
    def patch(self,request,*args, **kwargs):
        """add new user into room"""
        uri = kwargs['uri']
        usermail = request.data['email'] #note: add checking user exist or not
        # user = UserChat.objects.get(email=usermail)
        user = UserChat.objects.filter(email=usermail).first()
        if(not user):
            return Response({
                'status': 'FAILED',
                'message': 'User does not exit',

            })
        chat_room = ChatRoom.objects.get(uri = uri)
        owner = chat_room.owner
        if(owner != user):
            chat_room.members.get_or_create(
                user = user, chat_room = chat_room
            )
        owner = get_user_info(owner)
        members = [
            get_user_info(chat_room.user) for chat_room in chat_room.members.all()
        ]
        members.insert(0,owner)
        return Response({
            'status' :'SUCCESS', 'members':members,
            'message' : user.name + 'has joined the chat',
            'user' : get_user_info(user)
        })


class ChatMessageView(APIView):
    """Make/Get message"""
    permissions_classes = (permissions.IsAuthenticated,)
    def get(self,request, *args , **kwargs):
        """ger all messages in a room"""
        uri = kwargs['uri']
        chat_room = ChatRoom.objects.get(uri=uri)
        messages = chat_room.messages.values('user_id','create_date','message')

        return Response({
            'room_id': chat_room.id, 'uri': chat_room.uri,
            'owner_id' : chat_room.owner_id,
            'messages': messages,
        })

    def post(self,request,*args,**kwargs):
        """send a new message in chat room"""
        uri = kwargs['uri']
        message = request.data['message']

        user = request.user
        chat_room = ChatRoom.objects.get(uri=uri)

        ChatRoomMessage.objects.create(
            user = user,
            chat_room = chat_room,
            message = message
        )
        return Response ({
            'status': 'SUCCESS', 'uri': chat_room.uri, 'message': message,
            'user': get_user_info(user)
        })