from django.contrib.auth.models import User, AbstractUser
from django.db import models
import cloudinary
import cloudinary.uploader
import cloudinary.api

class SkateUser(AbstractUser):
     avatar = models.ImageField("Profile Pic", upload_to="profile_images/", blank=True, null=True)

class Post(models.Model):
    author = models.ForeignKey(SkateUser, related_name='cart_author')
    title = models.TextField()
    image = models.ImageField("Profile Pic", upload_to="post_images/", blank=True, null=True)
    location = models.CharField(max_length=100)

class Cart(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField("Profile Pic", upload_to="cart_images/", blank=True, null=True)
