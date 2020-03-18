export default {
  mode: 'universal',
  server: {
    port: process.env.NODE_ENV === 'production' ? 9005 : 80,
    host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/api.ts'],
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
    //
    'nuxt-i18n',
    // 优化图像加载
    // https://www.bazzite.com/docs/nuxt-optimized-images/
    '@bazzite/nuxt-optimized-images',
    // 网站地图
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'http://www.ladishb.com',
    gzip: true,
    exclude: ['/admin/**', '/en/admin/**', '/zh/admin/**'],
    // eslint-disable-next-line require-await
    routes: async (ctx:Context) => {
      // eslint-disable-next-line no-console
      console.log(ctx)

      /* const { data } = await axios.get(
        `${ServerHost}/api/Get_arg?table=router`
      )
      return data.map(router => router.rout) */
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
    strategy: 'prefix_except_default'
  },
  axios: {
    // baseURL: 'http://localhost:9005',
    proxy: true
    // credentials: true
  },

  proxy: {
    '/api': 'http://www.ladishb.com:9006'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (_config: Configuration, _ctx: Context) { }
  }
}
