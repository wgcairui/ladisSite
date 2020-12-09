import { Plugin } from '@nuxt/types'
// import { NuxtAxiosInstance } from '@nuxtjs/axios'
// import { NuxtHTTPInstance } from '@nuxt/http'
import { params } from '../types/index'

const MyApi: Plugin = ({ $http, store }, inject) => {
  class Api {
    // static axios:NuxtHTTPInstance = (ctx.$axios.create({ method: 'GET' }) as any)
    static Params(params: { [x: string]: string }) {
      const query = new URLSearchParams(params)
      return '?' + query.toString()
    }

    static async GeneralGetInfo(param: params) {
      $http.setHeader('name', encodeURI(store.state.name))
      const data = await $http.$post('/api/Get_arg', param)
      return data
    }

    static async GetHomeNews() {
      const data = await $http.$get('/api/GetHomeNews')// ({ url: '/api/GetHomeNews' })
      return data
    }

    static async GetBuyList(city: string) {
      const data = await $http.$post('/api/Get_buy_li', { city })
      return data
    }

    static async Down(fileName: string) {
      const data = await $http.$post('/api/Down', { fileName })
      return data
    }

    static async GetContent(link: string) {
      const data = await $http.$post('/api/GetContent', { link })
      return data
    }
  }
  /* Api.axios.onRequest((config) => {
    const SiteName = ctx.store.state.name
    const i18n = ctx.app.i18n.locale
    config.params = { ...config.params || {}, SiteName, i18n }
    return config
  }) */
  inject('Api', Api)
}

export default MyApi
