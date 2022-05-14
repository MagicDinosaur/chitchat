from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import UserChat
from .serializers import UserSerializer
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime


@api_view(['POST'])
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
#         user = User.objects.filter(email=email).first()
#         if user is None:
#             raise AuthenticationFailed('User not found!')
#
#         if not user.check_password(password):
#             raise AuthenticationFailed('Incorrect password!')
#         payload = {
#             'id': user.id,
#             'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
#             'iat': datetime.datetime.utcnow()
#         }
#
#         token = jwt.encode(payload, 'secret', algorithm='HS256').decode('utf-8')
#         response = Response()
#
#         response.set_cookie(key='jwt', value=token, httponly=True)
#         response.data = {
#             'jwt': token
#         }
#         return response
# @api_view(['GET'])
# def UserView(request):
#     if request.method =='GET':
#         token = request.COOKIES.get('jwt')
#
#         if not token:
#             raise AuthenticationFailed('Unauthenticated!')
#
#         try:
#             payload = jwt.decode(token, 'secret', algorithm=['HS256'])
#         except jwt.ExpiredSignatureError:
#             raise AuthenticationFailed('Unauthenticated!')
#
#         user = User.objects.filter(id=payload['id']).first()
#         serializer = UserSerializer(user)
#         return Response(serializer.data)
# @api_view(['GET'])
# def LogoutView(request):
#     if request.method == 'GET':
#         response = Response()
#         response.delete_cookie('jwt')
#         response.data = {
#             'message': 'success'
#         }
#         return response
