from django.shortcuts import render, redirect, get_object_or_404
from .rsub import rsub
from .rview import rview
from .rhot import rhot
from .models import Contact
from .forms import ContactForm
# from .crawling2 import subs_ranking
# Create your views here.


def index(request):
    return render(request, 'index.html')


def blog(request):
    return render(request, 'blog.html')

def services(request):
    return render(request, 'services.html')

def ranking_sub(request):
    htmlsub = rsub()
    return render(request, 'ranking_sub.html', {'htmlsub': htmlsub})

def ranking_view(request):
    htmlview = rview()
    return render(request, 'ranking_view.html', {'htmlview': htmlview})

def ranking_hot(request):
    htmlhot = rhot()
    return render(request, 'ranking_hot.html', {'htmlhot': htmlhot})

# def ranking_sub(request):
#     htmlsub = rsub()
#     return render(request, 'ranking_sub.html', {'htmlsub': htmlsub})

def contact(request):

    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            contact = form.save(commit=False)
            contact.save()
            return redirect('contact_response')
    else:
        form = ContactForm()
    return render(request, 'contact.html', {'form': form})


def response(request):
    return render(request, 'contact_response.html')
