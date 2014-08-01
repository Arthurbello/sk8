from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm
from skate_shop.models import SkateUser, Post
from cloudinary.models import CloudinaryField
import cloudinary
import cloudinary.uploader
import cloudinary.api


__author__ = 'ayomidebell'

class SkateUserCreationForm(UserCreationForm):
        email = forms.EmailField(required=True)
        first_name = forms.CharField(max_length=100)
        last_name = forms.CharField(max_length=100)
        avatar = forms.ImageField(required=True)
        bio = forms.CharField(max_length=150, widget=forms.Textarea(attrs={'placeholder': 'Tell us about yourself'}))
        class Meta:
            model = SkateUser
            fields = ('avatar', "username", 'first_name', 'last_name', 'bio', "email", "password1",
                      "password2")

        def clean_username(self):
            # Since User.username is unique, this check is redundant,
            # but it sets a nicer error message than the ORM. See #13147.
            username = self.cleaned_data["username"]
            try:
                SkateUser.objects.get(username=username)
            except SkateUser.DoesNotExist:
                return username
            raise forms.ValidationError(
                self.error_messages['duplicate_username'],
                code='duplicate_username',
            )

class PostCreationForm(forms.Form):
    title = forms.CharField(widget=forms.TextInput(attrs={'class' : 'myfieldclass'}))
    description = forms.CharField(widget=forms.Textarea(attrs={'class' : 'myfieldclass'}))
    image = forms.ImageField(required=True)
    location = forms.CharField(max_length=120)