from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from skate_shop.forms import SkateUserCreationForm


def register(request):
    if request.method == 'POST':
        form = SkateUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("profile")
    else:
        form = SkateUserCreationForm()

    return render(request, "registration/register.html", {
        'form': form,
    })


def profile(request):
    return render(request, 'profile.html', {})

def home(request):
    return render(request, 'home.html', {})

def shop(request):
    return render(request, 'shop.html', {})