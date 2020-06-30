FROM itksb/php-fpm-v8js:latest

# Download script to install PHP extensions and dependencies
ADD https://raw.githubusercontent.com/mlocati/docker-php-extension-installer/master/install-php-extensions /usr/local/bin/

RUN chmod uga+x /usr/local/bin/install-php-extensions && sync

RUN DEBIAN_FRONTEND=noninteractive apt-get update -q \
    && DEBIAN_FRONTEND=noninteractive apt-get install -qq -y \
        build-essential \
        curl \
        git \ 
        python \
        libglib2.0-dev \ 
#    && install-php-extensions \
#        bcmath \
#        bz2 \
#        calendar \
#        exif \
#        gd \
#        intl \
#        ldap \
#        memcached \
#        mysqli \
#        opcache \
#        pdo_mysql \
#        pdo_pgsql \
#        pgsql \
#        redis \
#        soap \
#        xsl \
#        zip
