from django.contrib.auth.models import User, AbstractUser
from django.db import models
import cloudinary
import cloudinary.uploader
import cloudinary.api


class SkateUser(AbstractUser):
    avatar = models.ImageField("Avatar Pic", upload_to="profile_images/", blank=True, null=True)
    bio = models.TextField(max_length=160)

    def __unicode__(self):
        return u"{}".format(self.username)


class Post(models.Model):
    author = models.ForeignKey(SkateUser, related_name='cart_author')
    title = models.TextField()
    description = models.CharField(max_length=160)
    image = models.ImageField("Post Pic", upload_to="post_images/", blank=True, null=True)
    location = models.CharField(max_length=100)
    likes = models.IntegerField(null=True)
    created = models.DateTimeField(auto_now_add=True)


    def __unicode__(self):
        return u"{}".format(self.title)


class Cart(models.Model):
    owner = models.CharField(max_length=242)
    title = models.CharField(max_length=300)
    image = models.URLField()
    price = models.FloatField(null=True)

    def __unicode__(self):
        return u"{}".format(self.title)