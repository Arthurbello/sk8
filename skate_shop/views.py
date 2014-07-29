from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from skate_shop.forms import SkateUserCreationForm, PostCreationForm
from skate_shop.models import Post, SkateUser


def register(request):
    if request.method == 'POST':
        form = SkateUserCreationForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect("home")
    else:
        form = SkateUserCreationForm()

    return render(request, "registration/register.html", {
        'form': form,
    })


def profile(request):
    if request.method == 'POST':
        form = PostCreationForm(request.POST, request.FILES)
        if form.is_valid():
            title = form.cleaned_data['title']
            author = request.user
            location = form.cleaned_data['location']
            # description= form.cleaned_data['description']
            image = form.cleaned_data['image']

            Post.objects.create(location=location, author=author, title=title, image=image)
            return redirect('home')
    else:
        form = PostCreationForm()
    return render(request, "profile.html", {'form': form})

def home(request):
    set = Post.objects.reverse()[:5]
    # avatar = SkateUser.objects.get(avatar=request.user.avatar).url

    return render(request, 'home.html', {'set': set})

def shop(request):
    return render(request, 'shop.html', {})

def view_post(request):
    set = Post.objects.filter(author=request.user)

    return render(request, 'view_post.html', {'set': set})

def view_profile(request, post_username):
    username = SkateUser.objects.get(username=post_username)
    postings = Post.objects.reverse().filter(author=username)
    return render(request, "view_profile.html", {"profile": username, "set": postings})

