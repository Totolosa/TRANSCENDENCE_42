# FROM debian:buster

# RUN apt-get update \
# && apt-get upgrade -y \
# && apt-get install -y bash nodejs yarn \
# && apt-get clean \
# && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# RUN yarn create nuxt-app 42-transcendence
# RUN yarn add
FROM alpine:latest

RUN apk add --no-cache --upgrade bash && apk add --update nodejs npm

RUN npm install -g @vue/cli


WORKDIR /front

# COPY package.json /front/package.json
RUN npm install
ENTRYPOINT ["sh", "./launch.sh"]
