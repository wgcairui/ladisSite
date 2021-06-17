import { NuxtConfig } from '@nuxt/types'
import axios from "axios"
import { router } from './types/typing'

//const RemoteServerAddress = 'http://127.0.0.1:7001'
const RemoteServerAddress = 'https://www.ladishb.com/site'

const config: NuxtConfig = {
  telemetry: false,
  ssr: true,
  dev: process.env.NODE_ENV !== 'production',
  modern: 'server',
  server: {
    port: process.env.NODE_ENV === 'production' ? 80 : 9005,
    host: '0.0.0.0'
  },
  env: {
    serverUrl: RemoteServerAddress
  },

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      href: '//at.alicdn.com/t/font_1290509_iyq1zhprcvc.css',
      type: 'text/css',
      rel: 'stylesheet'
    }
    ],
    script: [
      //{ src: process.env.CODE_HM || 'https://hm.baidu.com/hm.js?265ab1ae5fe5d0764570151f06dc3263' }
    ]
  },

  // Customize the progress-bar color

  loading: { color: '#fff' },
  components: true,
  // Global CSS

  css: ['~/assets/ladis-old.css'],

  // Plugins to load before mounting the App

  plugins: ['~/plugins/api.ts', '~/plugins/baidu.js'],

  // Nuxt.js dev-modules

  buildModules: [
    // https://typescript.nuxtjs.org/guide/setup.html#installation
    '@nuxt/typescript-build'
  ],

  // Nuxt.js modules

  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n',
    // https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    //'@nuxtjs/component-cache',
    '@nuxtjs/proxy',
    '@nuxtjs/axios'
  ],
  sitemap: {
    gzip: true,
    routes: async () => {
      const routs = await axios.get<router[]>(RemoteServerAddress + "/web/getRout", { headers: { name: encodeURI(process.env.NAME!) } })
      return (routs.data || []).map(el => ({
        url: el.rout,
        changefreq: 'daily',
        priority: 1,
        lastmod: '2021-06-16T13:30:00.000Z'
      }))

      /* return [
        {
          url: '/page/3',
          changefreq: 'daily',
          priority: 1,
          lastmod: '2017-06-30T13:30:00.000Z'
        }
      ] */
    }
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
  axios: {
    proxy: true // Can be also an object with default options
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
    "/web": RemoteServerAddress,
    '/docment': RemoteServerAddress,
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
}

export default config
