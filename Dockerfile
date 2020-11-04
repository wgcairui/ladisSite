FROM node:14-alpine

WORKDIR /app

ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV=production

COPY ["package.json","tsconfig.json", "nuxt.config.ts", "/app/"]

# Install app dependencies

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm install && cnpm install -g ts-node typescript pm2

COPY .nuxt /app/.nuxt
COPY assets /app/assets
COPY locales /app/locales
COPY middleware /app/middleware
COPY plugins /app/plugins
COPY store /app/store
COPY types /app/types

EXPOSE 80

#CMD ["npm","run","start"]