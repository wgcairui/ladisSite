FROM node

ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV=production

COPY ["package.json","tsconfig.json", "nuxt.config.ts", "/"]

# Install app dependencies
# echo https://mirrors.aliyun.com/alpine/v3.6/main/ > /etc/apk/repositories  && apk add autoconf automake libtool 

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org \
    && cnpm install && cnpm install -g ts-node typescript pm2

COPY .nuxt /.nuxt
COPY assets /assets
COPY locales /locales
COPY middleware /middleware
COPY plugins /plugins
COPY store /store
COPY static /static
COPY types /types

EXPOSE 80

CMD ["npm","run","start"]