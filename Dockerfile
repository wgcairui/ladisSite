# ---------- Deps stage ----------
FROM node:24-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
# 国内构建慢时启用：npm config set registry https://registry.npmmirror.com
RUN npm ci --no-audit --no-fund

# ---------- Build stage ----------
FROM node:24-alpine AS builder
WORKDIR /app
# Nuxt 2 用的 webpack 4 在 Node 17+ 默认 OpenSSL 3 下会报
# ERR_OSSL_EVP_UNSUPPORTED（MD4 hash），需要 legacy provider
ENV NODE_OPTIONS=--openssl-legacy-provider
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# 跑 nuxt build；nuxt.config.ts 由 Nuxt 自己的 typescript-build 链处理，不需要单独 tsc
RUN npm run build && npm prune --omit=dev

# ---------- Runner stage ----------
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NPM_CONFIG_LOGLEVEL=warn \
    HOST=0.0.0.0

# 显式 uid/gid=1001，与 ladis-admin / uart-site-v3 一致
RUN addgroup --system --gid 1001 app \
    && adduser --system --uid 1001 --ingroup app app

# 拷贝运行时必需物
COPY --from=builder --chown=app:app /app/node_modules  ./node_modules
COPY --from=builder --chown=app:app /app/.nuxt        ./.nuxt
COPY --from=builder --chown=app:app /app/package.json  ./package.json
COPY --from=builder --chown=app:app /app/nuxt.config.ts ./nuxt.config.ts
COPY --from=builder --chown=app:app /app/tsconfig.json ./tsconfig.json
COPY --from=builder --chown=app:app /app/jsconfig.json ./jsconfig.json
COPY --from=builder --chown=app:app /app/assets        ./assets
COPY --from=builder --chown=app:app /app/components    ./components
COPY --from=builder --chown=app:app /app/layouts       ./layouts
COPY --from=builder --chown=app:app /app/locales       ./locales
# middleware/ 当前为空目录（脚手架 README 清理后无文件），skip 拷贝
COPY --from=builder --chown=app:app /app/pages         ./pages
COPY --from=builder --chown=app:app /app/plugins       ./plugins
COPY --from=builder --chown=app:app /app/static        ./static
COPY --from=builder --chown=app:app /app/store         ./store
COPY --from=builder --chown=app:app /app/types         ./types

USER app

# 端口由 nuxt.config.ts 决定：production = 80，dev = 9005
# 容器里默认跑生产 80
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=20s --retries=3 \
  CMD wget -qO- http://127.0.0.1:80/ >/dev/null 2>&1 || exit 1

CMD ["npm", "run", "start"]
