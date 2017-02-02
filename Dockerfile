FROM nginx:1.11.9-alpine
MAINTAINER cmiller548@gmail.com

RUN apk add --no-cache nodejs git

ADD . /usr/share/nginx/html

RUN echo '{ "allow_root": true }' > /root/.bowerrc

WORKDIR /usr/share/nginx/html/

RUN npm install --unsafe-perm

EXPOSE 80
