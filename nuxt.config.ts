import { NuxtConfig } from '@nuxt/types'
import { NuxtApp } from '@nuxt/types/app'
import axios from 'axios'
import { params } from './types'
// const RemoteServerAddress = 'http://www.ladishb.com/admin'
const RemoteServerAddress = 'http://www.ladishb.com:8006'
const siteName = process.env.NAME || '湖北雷迪司'
export default {
  telemetry: false,
  ssr: true,
  dev: process.env.NODE_ENV !== 'production',
  modern: 'server',
  server: {
    port: process.env.NODE_ENV === 'production' ? 80 : 9005,
    host: '0.0.0.0'
  },
  env: {
    name: siteName,
    serverUrl: RemoteServerAddress
  },

  head: {
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: process.env.CODE_HM }
    ]
  },

  // Customize the progress-bar color

  loading: { color: '#fff' },

  // Global CSS

  css: ['~/assets/ladis-old.css'],

  // Plugins to load before mounting the App

  plugins: ['~/plugins/api.ts', '~/plugins/http.ts', '~/plugins/baidu.js'],

  // Nuxt.js dev-modules

  buildModules: [
    // https://typescript.nuxtjs.org/guide/setup.html#installation
    '@nuxt/typescript-build'
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module'
  ],

  // Nuxt.js modules

  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n',
    // https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    '@nuxtjs/component-cache',
    // https://http.nuxtjs.org/setup
    '@nuxt/http',
    '@nuxtjs/proxy'
  ],
  sitemap: {
    hostname: siteName,
    gzip: true,
    // exclude: ['/admin/**', '/en/admin/**', '/zh/admin/**'],
    // eslint-disable-next-line require-await
    routes: async (ctx: NuxtApp) => {
      console.log({ctx})
      const param: params = { table: 'Router' }
      const router = await axios.post(
        `${RemoteServerAddress}/api/Get_arg`, { params: param }
      ).then((el) => {
        return el.data.map((router: { rout: any }) => router.rout)
      }).catch((err) => {
        console.log(err)
        return []
      })
      return router
    }
  },
  optimizedImages: {
    // 优化的图像类型
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'jpg'],
    // 开启优化
    optimizeImages: true
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US'
      },
      {
        code: 'zh',
        name: '简体中文',
        iso: 'zh-CN'
      }
    ],
    defaultLocale: 'zh',
    // 翻译文件
    vueI18n: {
      fallbackLocale: 'zh',
      messages: {
        en: require('./locales/en.json'),
        zh: require('./locales/zh.json')
      }
    },
    // 持久化语言
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: 'Ladis_WebSite_I18n'
    },
    // 路由配置
    strategy: 'no_prefix'
  },
  http: {
    proxy: true,
    retry: 2
  },
  publicRuntimeConfig: {
    http: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    http: {
      baseURL: process.env.BASE_URL
    }
  },

  proxy: {
    '/api/': {
      target: RemoteServerAddress,
      pathRewrite: {
        '/api/': '/api/v2/'
      }
    },
    '/_CMS_NEWS_IMG_': RemoteServerAddress,
    '/a_images': RemoteServerAddress,
    '/down': RemoteServerAddress,
    '/upload': RemoteServerAddress,
    '/config': RemoteServerAddress
  },

  // Build configuration

  build: {
    extractCSS: true
  },
  router: {}
} as NuxtConfig
