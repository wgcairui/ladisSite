import { Plugin } from '@nuxt/types'
// import { NuxtAxiosInstance } from '@nuxtjs/axios'
// import { NuxtHTTPInstance } from '@nuxt/http'
import { params } from '../types/index'

const MyApi: Plugin = ({ $http, store, $axios }, inject) => {
  /**
   * 用于向服务器请求数据
   */
  class Api {
    // static axios:NuxtHTTPInstance = (ctx.$axios.create({ method: 'GET' }) as any)
    static Params(params: { [x: string]: string }) {
      const query = new URLSearchParams(params)
      return '?' + query.toString()
    }
    /**
     * 获取数据条目
     * @param param 
     */
    static async GeneralGetInfo(param: params) {
      $http.setHeader('name', encodeURI(store.state.name))
      const data = await this.post('/api/Get_arg', param)
      return data
    }
    /**
     * 获取最新的新闻条目
     */
    static async GetHomeNews() {
      const data = await $http.$get('/api/GetHomeNews')// ({ url: '/api/GetHomeNews' })
      return data
    }
    /**
     * 获取代理商信息
     * @param city 代理商所在地
     */
    static async GetBuyList(city: string) {
      const data = await this.post('/api/Get_buy_li', { city })
      return data
    }
    /**
     * 获取下载资料信息
     * @param fileName 下载文件名
     */
    static async Down(fileName: string) {
      const data = await this.post('/api/Down', { fileName })
      return data
    }

    static async GetContent(link: string) {
      const data = await this.post('/api/GetContent', { link })
      return data
    }

    static post(base: string, body: any) {
      try {
        return $http.$post(base, body)
      } catch (error) {
        console.log({ error });
        return $axios.$post(base, body)
      }
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
