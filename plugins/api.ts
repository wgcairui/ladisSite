import { Context, Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { params } from '../types/index'

const MyApi:Plugin = (ctx:Context, inject: (key: string, value: any) => void) => {
  class Api {
        static axios:NuxtAxiosInstance = (ctx.$axios.create({ method: 'GET' }) as any)

        static async GeneralGetInfo (param:params) {
          const data = await this.axios.$get('/api/Get_arg', { params: { ...param } })
          return data
        }

        static async GetHomeNews () {
          const data = await this.axios.$get('/api/GetHomeNews')// ({ url: '/api/GetHomeNews' })
          return data
        }

        static async GetBuyList (city:string) {
          const data = await this.axios.$get('/api/Get_buy_li', { params: { city } })
          return data
        }

        static async Down (fileName:string) {
          const data = await this.axios.get('/api/Down', { params: { fileName } })
          return data
        }

        static async GetContent (link:string) {
          const data = await this.axios.$get('/api/GetContent', { params: { link } })
          return data
        }
  }
  Api.axios.onRequest((config) => {
    const SiteName = ctx.store.state.defaults.name
    const i18n = ctx.app.i18n.locale
    config.params = { ...config.params || {}, SiteName, i18n }
    return config
  })
  inject('Api', Api)
}

export default MyApi
