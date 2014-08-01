import json
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from skate_shop.forms import SkateUserCreationForm, PostCreationForm
from skate_shop.models import Post, SkateUser, Cart


def register(request):
    if request.method == 'POST':
        form = SkateUserCreationForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            new_user = authenticate(username=request.POST['username'],
                                    password=request.POST['password1'])
            login(request, new_user)
            return redirect("home")
    else:
        form = SkateUserCreationForm()

    return render(request, "registration/register.html", {
        'form': form,
    })

@login_required
def profile(request):
    if request.method == 'POST':
        form = PostCreationForm(request.POST, request.FILES)
        if form.is_valid():
            title = form.cleaned_data['title']
            author = request.user
            location = form.cleaned_data['location']
            description= form.cleaned_data['description']
            image = form.cleaned_data['image']

            Post.objects.create(location=location, author=author, title=title, image=image, description=description)
            return redirect('home')
    else:
        form = PostCreationForm()
    return render(request, "profile.html", {'form': form})

def home(request):
    bet = Post.objects.all()
    set = Post.objects.reverse()[:5]
    # avatar = SkateUser.objects.get(avatar=request.user.avatar).url

    return render(request, 'home.html', {'set': set, 'bet': bet})
@login_required
def shop(request):
    return render(request, 'shop.html', {})

# def search_results(request):
#     return render(request, 'search_results.html', {})

def view_post(request):
    set = Post.objects.filter(author=request.user)

    return render(request, 'view_post.html', {'set': set})
@login_required
def cart(request):
    set = Cart.objects.filter(owner=request.user)

    return render(request, 'cart.html', {'set': set})

def view_profile(request, post_username):
    username = SkateUser.objects.get(username=post_username)
    postings = Post.objects.reverse().filter(author=username)
        # if request.user.username == post_username
    return render(request, "view_profile.html", {"profile": username, "set": postings})

@csrf_exempt
def new_wish(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        new_cart = Cart.objects.create(
            owner=request.user.username,
            title=data['title'],
            image=data['image_url'],
            price=data['price']

        )
        mive = {
            'owner': new_cart.owner,
            'title': new_cart.title,
            'image': new_cart.image,
            'price': new_cart.price
        }
        return HttpResponse(json.dumps(mive), content_type='application/json')