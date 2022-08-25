from django.contrib import admin
from .models import Match, MatchDenied, MatchRequest, User
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model

from users.forms import UserChangeForm, UserCreationForm

User = get_user_model()
admin.site.register(Match)
admin.site.register(MatchRequest)
admin.site.register(User)
admin.site.register(MatchDenied)
