from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import (UserChat, ChatRoom, ChatRoomMessage, ChatRoomMember, get_user_info)
from .serializers import UserSerializer
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime
from rest_framework.views import APIView
from rest_framework import permissions

@api_view(['POST'])
def RegisterView(request):
    if request.method == 'POST':
        serializers= UserSerializer(data= request.data)
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return Response(serializers.data)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny, ])
def LoginView(request):
    if request.method =='POST':
        email = request.data['email']
        password = request.data['password']

        user = UserChat.objects.filter(email=email).first()
        if user is None:
            raise AuthenticationFailed('User not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')
        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        return response

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
        usermail = request.data['email']
        user = UserChat.objects.get(email=usermail)

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
