from django.conf.urls import patterns, include, url
from django.conf.urls.static import static

from django.contrib import admin
from skate import settings

admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'skate_shop.views.home', name='home'),
    url(r'^register/$', 'skate_shop.views.register', name='register'),
    # url(r'^search_results/$', 'skate_shop.views.search_results', name='search_results'),
    url(r'^view_post/$', 'skate_shop.views.view_post', name='view_post'),
    url(r'^profile/$', 'skate_shop.views.profile', name='profile'),
    url(r'^shop/$', 'skate_shop.views.shop', name='shop'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^login/$', 'django.contrib.auth.views.login', name='login'),
    url(r'^logout/$', 'django.contrib.auth.views.logout', name='logout'),
    url(r'^password_reset/$', 'django.contrib.auth.views.password_reset', name='password_reset'),
    url(r'^password_reset/done/$', 'django.contrib.auth.views.password_reset_done', name='password_reset_done'),
    # Support old style base36 password reset links; remove in Django 1.7
    url(r'^reset/(?P<uidb36>[0-9A-Za-z]{1,13})-(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        'django.contrib.auth.views.password_reset_confirm_uidb36'),
    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        'django.contrib.auth.views.password_reset_confirm',
        name='password_reset_confirm'),
    url(r'^reset/done/$', 'django.contrib.auth.views.password_reset_complete', name='password_reset_complete'),
    url(r'^user/(?P<post_username>\w+)$', 'skate_shop.views.view_profile', name='view_profile'),
url(r'^new_wish/$', 'skate_shop.views.new_wish', name='new_wish'),
url(r'^cart/$', 'skate_shop.views.cart', name='cart'),


)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
