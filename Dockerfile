FROM node:14-alpine

ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV=production
ENV NAME=湖北雷迪司

COPY ["package.json", "nuxt.config.js", "/"]

# Install app dependencies
# echo https://mirrors.aliyun.com/alpine/v3.6/main/ > /etc/apk/repositories  && apk add autoconf automake libtool 

# RUN  npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm install --production
RUN  npm install -p
COPY .nuxt /.nuxt
COPY assets /assets
COPY locales /locales
#COPY middleware /middleware
#COPY plugins /plugins
#COPY store /store
COPY static /static

EXPOSE 80

CMD ["npm","run","start"]