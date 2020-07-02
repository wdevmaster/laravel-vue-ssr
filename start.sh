#! /bin/bash

docker-compose up -d --build \
&& cp .env.example .env \
&& chmod 777 -R storage/ bootstrap/cache/ \
&& docker-compose exec app php artisan key:generate \
&& sed -i 's/APP_ENV=local/APP_ENV=production/g' .env \
&& docker-compose run node npm run dev