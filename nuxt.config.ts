import { NuxtAppOptions } from '@nuxt/types'
import axios from 'axios'
import { defaults } from './store/user'
import { params } from './types'
// const RemoteServerAddress = process.env.NODE_ENV === 'production' ? 'http://www.ladishb.com/admin' : 'http://localhost:9006'
const RemoteServerAddress = 'http://www.ladishb.com/admin'
export default {
  dev: process.env.NODE_ENV !== 'production',

  server: {
    port: process.env.NODE_ENV === 'production' ? (process.env.NUXT_PORT || defaults.port || 80) : 9005,
    host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: defaults.home.key?.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: defaults.home.ico ?? '/favicon.ico' }],
    script: [
      { src: defaults.hm }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/ladis-old.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/api.ts', '~/plugins/defaults.ts', '~/plugins/baidu.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // https://typescript.nuxtjs.org/guide/setup.html#installation
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n',
    // 优化图像加载
    // https://www.bazzite.com/docs/nuxt-optimized-images/
    '@bazzite/nuxt-optimized-images',
    // 网站地图
    // https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    '@nuxtjs/component-cache'
  ],
  sitemap: {
    hostname: defaults.name,
    gzip: true,
    // exclude: ['/admin/**', '/en/admin/**', '/zh/admin/**'],
    // eslint-disable-next-line require-await
    routes: async () => {
      const param: params = { table: 'Router' }
      const router = await axios.get(
        `${RemoteServerAddress}/api/Get_arg`, { params: param }
      ).then((el) => {
        return el.data.map((router: { rout: any} ) => router.rout)
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
  axios: {
    // baseURL: 'http://localhost:9005',
    proxy: true
    // credentials: true
  },

  proxy: {
    '/api': RemoteServerAddress,
    '/_CMS_NEWS_IMG_': RemoteServerAddress,
    '/a_images': RemoteServerAddress,
    '/down': RemoteServerAddress,
    '/upload': RemoteServerAddress,
    '/config': RemoteServerAddress
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true
  },
  router: {}
} as unknown as NuxtAppOptions