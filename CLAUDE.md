# CLAUDE.md

> ladis-site（LADS 官方网站）项目的 Claude / agent 协作指南。覆盖项目结构、技术栈、常用命令、部署、踩坑记录。

---

## 项目概览

- **项目名**：ladis-site（v3.0.2）
- **类型**：企业官网 + 营销展示 + 资源下载 + 360 VR 展示
- **目标用户**：ladishb.com 访客 + 渠道客户
- **后端**：与 ladis-admin 共用 `https://www.ladishb.com/site`（ladis-server），**Sitemap 路由由后端 `/web/getRout` 接口返回**
- **技术栈**：Nuxt 2.15.8（**SSR 开启**） + Vue 2 + TypeScript + Bootstrap-Vue + i18n（en/zh）
- **关键差异**：跟 [ladis-admin](../ladis-admin/CLAUDE.md) 是同套 Nuxt 2 骨架但定位不同——这个是**公开官网**（要 SEO），ladis-admin 是**商家后台**（SPA 模式）

---

## 技术栈

| 层 | 选型 | 备注 |
|---|---|---|
| 框架 | Nuxt 2.15.8 | **SSR on**（`ssr: true`），需要 Node.js 服务器运行时 |
| 视图 | Vue 2 + bootstrap-vue 2.21.2 | 经典 Bootstrap 4 风格 + 自定义 CSS `assets/ladis-old.css` |
| 国际化 | `nuxt-i18n` 6.28.1 | en / zh，cookie 持久化（`Ladis_WebSite_I18n`） |
| SEO | `@nuxtjs/sitemap` 2.4.0 | 路由从后端 `/web/getRout` 拉，**需要 `NAME` env var** |
| HTTP | `@nuxtjs/axios` + `@nuxtjs/proxy` | dev 期转发到后端 |
| 类型 | TypeScript + `@nuxt/typescript-build` | 严格模式 |
| 样式 | SCSS（`sass` 1.43.4） | `assets/ladis-old.css` |
| Lint | eslint + stylelint + lint-staged | pre-commit hook（lint-staged 配置在 package.json） |

---

## 目录结构

```
ladisSite/
├── assets/           # 全局样式（ladis-old.css）
├── components/       # 公共组件
│   ├── AboutAsid.vue / CaseAsid.vue / NewsAsid.vue / ProductAsid.vue  # 侧边栏
│   ├── MyImg.vue / MySection.vue  # 通用
│   ├── CardCopy.vue / VrAsid.vue  # 卡片 / 360 VR
│   └── footer.vue / head.vue
├── layouts/
│   ├── default.vue   # 默认布局
│   └── map.vue       # 地图/特殊页布局
├── locales/          # i18n 翻译
│   ├── zh.json / en.json
├── middleware/       # （空，Nuxt 默认无中间件）
├── pages/            # 路由
│   ├── index.vue
│   ├── sitemap.vue
│   ├── 360/          # 360 VR 展示（_id.vue 动态路由，index.vue 列表）
│   ├── about/        # 关于我们（_id.vue + _year/ + shtml 历史页）
│   ├── case/         # 案例
│   ├── news/         # 新闻
│   ├── products/     # 产品
│   └── support/      # 技术支持
├── plugins/
│   ├── api.ts        # API 封装
│   └── baidu.js      # 百度统计
├── static/           # 静态资源
├── store/index.ts    # Vuex 根
├── types/
│   └── typing.ts     # 全局类型
├── nuxt.config.ts
├── tsconfig.json
├── Dockerfile
├── docker-compose.yml
├── deploy.sh         # 裸机部署单文件脚本
└── .env.example
```

---

## 常用命令

```bash
# 本地开发（默认 :9005）
npm run dev

# 生产构建（产出 .nuxt/）
npm run build        # 内部: tsc nuxt.config.ts && nuxt build

# 启动生产服务（默认 0.0.0.0:80，可用 PORT 覆盖）
npm run start

# 静态化（当前是 SSR 模式，generate 仅用于导出静态备份）
npm run generate

# Lint
npm run lint

# Docker 构建（buildx 单平台 linux/amd64，匹配服务器架构）
npm run build:docker

# Docker 构建（buildx 多平台 amd64+arm64，发布到 wgcairui/ladissite）
npm run build:docker:multi

# 推送到 Docker Hub（依赖 docker login 已登录）
npm run push:docker

# 裸机部署（用 deploy.sh 替代）
./deploy.sh install   # 装依赖 + build
./deploy.sh start     # 后台启动
./deploy.sh stop      # 停止
./deploy.sh restart   # 重启
./deploy.sh status    # 状态
./deploy.sh logs      # tail -f 日志
./deploy.sh uninstall # 清理 node_modules / .nuxt / .run / logs
```

---

## 关键配置说明

### `nuxt.config.ts`

- `ssr: true`：**真 SSR**，必须跑在 Node 服务里，**不能用 `nuxt generate` 替代**（sitemap 路由是运行时拉后端）
- `server.port`：生产 80，开发 9005，可用 `PORT` env 覆盖
- `RemoteServerAddress`：默认 `https://www.ladishb.com/site`，**优先 `process.env.NUXT_SERVER`**
- `env.serverUrl`：注入到客户端（构建时烘进 `.nuxt/`）
- `sitemap.routes`：async 函数运行时执行 axios 请求 `/web/getRout`，**需要 `process.env.NAME` 和 `process.env.HOST`**
- `proxy`：`/web` `/docment` `/_CMS_NEWS_IMG_` `/a_images` `/down` `/upload` `/config` 全部转发到后端
- `i18n`：en/zh 双语，cookie 持久化，路由策略 `no_prefix`（不强制前缀）

### 环境变量

| 变量 | 作用 | 默认值 | 注入方式 | 生效时机 |
|---|---|---|---|---|
| `NUXT_SERVER` | 后端 API 基址 | `https://www.ladishb.com/site` | compose / .env / deploy.sh | **build**（烘进 .nuxt/） |
| `NAME` | 公司名（sitemap `/web/getRout` 时作 name header） | 无（必填，否则 sitemap 为空） | compose / .env / deploy.sh | **runtime**（sitemap 异步函数） |
| `HOST` | sitemap hostname | 启动时 `HOST` env | compose / .env | **runtime** |
| `PORT` | nuxt 监听端口 | 生产 80 / 开发 9005 | compose / .env | **runtime** |
| `HOST` (server) | nuxt 监听地址 | `0.0.0.0` | compose / .env | **runtime** |
| `BROWSER_BASE_URL` | 客户端 baseURL | 空 | optional | **runtime** |
| `BASE_URL` | 服务端 baseURL | 空 | optional | **runtime** |
| `NODE_ENV` | 运行环境 | production | compose / deploy.sh | **runtime** |

> ⚠️ **修改 `NUXT_SERVER` 后必须重新 build**，值会被烘进 `.nuxt/`，运行时改 env 不会生效。
> ⚠️ `NAME` 是 sitemap 必需，**不设会导致 sitemap 为空**（看 nuxt.config.ts:117 的 `console.error` 提示）

---

## 部署

### 形态 A：Docker / docker compose（推荐）

适用：服务器有 Docker / docker compose。

```bash
# 服务器上
cp .env.example .env
vi .env  # 改 NUXT_SERVER / NAME / HOST

# 构建并启动
docker compose up -d --build

# 状态
docker compose ps
docker compose logs -f ladis-site

# 升级
git pull
docker compose up -d --build

# 停服
docker compose down
```

镜像分层（Dockerfile）：
1. `node:24-alpine AS deps` — 装全量依赖
2. `node:24-alpine AS builder` — `npm run build` + `npm prune --omit=dev`
3. `node:24-alpine AS runner` — 拷贝 prod deps + `.nuxt` + 源码；非 root `app`（uid 1001）运行

### 形态 B：裸机（deploy.sh）

适用：服务器**没有 Docker** 或者不想用容器。

```bash
# 服务器上
cp .env.example .env
vi .env

# 首次
./deploy.sh install    # npm ci + npm run build
./deploy.sh start

# 升级
git pull
./deploy.sh restart

# 看日志
./deploy.sh logs
```

特性：
- **零外部依赖**（不需要 pm2 / systemd / docker）
- `setsid + nohup` 把进程放到后台跑，独立 session
- PID 写入 `.run/ladis-site.pid`
- 日志写入 `logs/ladis-site.log`（含 stdout + stderr）
- `.env` 自动加载
- Node 22+ 自动检测，< 22 直接退出并提示

### 形态 C：多平台 Docker Hub 发布

适用：发布到 `wgcairui/ladissite` 给多个架构的服务器拉取。

```bash
docker login   # 一次性
npm run build:docker:multi   # buildx linux/amd64 + linux/arm64
npm run push:docker          # tag + push
```

> 原 `build:docker` 默认 `linux/amd64` 单平台（节省构建时间），需要多平台才用 `build:docker:multi`。

### 反向代理

容器/裸机都监听 80，生产环境强烈建议在 nginx / caddy 后面跑 HTTPS。

---

## 踩坑记录

- **Node 版本**：原 Dockerfile 用 `node:16-alpine`（已 EOL）。现统一升级到 `node:24-alpine`。本地开发建议 nvm 切到 22 / 24。
- **`ssr: true` 不能用 `nuxt generate` 替代**：`generate` 产出的纯静态包**没有 sitemap 异步拉路由的能力**（因为它把 async 函数当静态数据烘进 html），`NAME` 不传时不会报错但 sitemap 是空的。
- **修改 `NUXT_SERVER` 后必须重新 build**：值会被 Nuxt 烘进 `.nuxt/`，运行时改 env 不会生效。
- **`NAME` 不设 = sitemap 空**：见 nuxt.config.ts:117 的 `console.error` 警告。**这是已知设计**——通过 NAME 让不同经销商/分公司部署时 sitemap 路由不一样。
- **不要把 `node_modules` 拷进镜像**：Dockerfile 多阶段已处理。
- **空 `middleware/` 目录**：删了脚手架 README 后此目录为空，**Dockerfile 不能显式 COPY**，否则构建报 "not found"。
- **sitemap `lastmod` 写死 `2021-06-16T13:30:00.000Z`**：见 nuxt.config.ts:115。**这日期明显是占位**，没自动更新，部署前确认是否需要改。
- **i18n `no_prefix` 策略**：`/` 同时是中文和英文（按 cookie 决定），没有 `/en/` `/zh/` 区分。如果将来要分 URL，参考 `nuxt-i18n` 文档改 strategy。
- **`tsc nuxt.config.ts` 在 build 里跑**：原 package.json 的 build 脚本是 `tsc nuxt.config.ts && nuxt build`，是项目自己加的（Nuxt 默认不 tsc 这个文件），保留即可，CI 别删。
- **i18n messages 用 `require`**：见 nuxt.config.ts:152。**不是 ESM `import`**——因为 `vueI18n.messages` 在 Nuxt 启动时同步读，require 是同步的。如果改用 import 要 await。
- **`Nuxt 2 + Node 24`**：nuxt 2.15.8 没正式支持 Node 24，但实际跑没问题。已知小坑是 `process.env` 注入默认值时偶尔报 warning，无害。

---

## 业务模块索引（pages/）

| 模块 | 路由 | 功能 |
|---|---|---|
| 首页 | `/` | 主页 |
| 360 VR | `/360`、`/360/:id` | 360 全景展示 |
| 关于我们 | `/about`、`/about/:id`、`.shtml.vue` | 公司介绍 + 历史页面 |
| 案例 | `/case`、`/case/:id`、`/_year` | 案例展示（按年份） |
| 新闻 | `/news`、`/news/:id`、`/_year` | 新闻列表（按年份） |
| 产品 | `/products`、`/products/:id`、`_year`、`seach` | 产品列表 + 搜索 |
| 技术支持 | `/support`、`/support/:id`、`/support/id`、`.shtml.vue` | 技术文档/下载 |
| 站点地图 | `/sitemap` | 可视化 sitemap |
| Sitemap.xml | 自动生成（`@nuxtjs/sitemap`） | 搜索引擎用 |

---

## 协作约定

- **新功能 / 重构** 优先在 feature 分支开 PR，**不要直接 push main**
- **改动 nuxt.config.ts**（特别是 `proxy` / `sitemap` / `i18n`）会显著影响 build 产物，必须本地 `npm run build && npm run start` 验证
- **改 plugins/api.ts** 之前先看 store/index.ts 的 actions 是否已经处理过这个错误
- **pages/ 顶层目录** 加新模块前先确认：模块名是英文单词、不要和现有目录冲突、不要用下划线开头（`_id.vue` / `_year` 是 Nuxt 动态路由约定保留）
- **Dockerfile / deploy.sh 改了必须在对应形态下验证**（改了 Dockerfile → docker build 试；改了 deploy.sh → bash -n 语法检查 + dry-run）
- **`git push` 推送远程用 wgcairui 账号 token**（参考 memory：ruicaiext-1m 已废弃，对 wgcairui/* 无写权限）
- **改了 `RemoteServerAddress` 的 fallback 默认值** 一定要 review——多个项目共用后端，fallback 写错会让所有环境都连错

---

## 关联项目

- **后端**：`ladis-server`（Node.js，独立仓库，部署在 `ladishb.com/site/`）
- **同源项目**（共用后端 + 部署约定）：
  - [ladis-admin](../ladis-admin/CLAUDE.md) — 商家后台，SPA 模式（`ssr: false`）
- **同作者其他项目**（参考）：
  - `uart-site-v3`（Next.js 15 + Bun，新一代）
  - `uart-server`（IoT 设备管理后端，主战场）
