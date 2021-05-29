import { Plugin } from '@nuxt/types'
// import { NuxtAxiosInstance } from '@nuxtjs/axios'
// import { NuxtHTTPInstance } from '@nuxt/http'
import { params } from '../types/index'

const MyApi: Plugin = ({ $http, store, $axios, env }, inject) => {


  /**
   * 用于向服务器请求数据
   */
  class Api {

    constructor() {
      $axios.onRequest((config) => {
        config.headers.name = encodeURI(store.state.name)
        return config
      })

      $axios.onRequestError(err=>{
        console.log({err});
        
      })
    }
    Params(params: { [x: string]: string }) {
      const query = new URLSearchParams(params)
      return '?' + query.toString()
    }

    /**
     * 查找产品字符串
     * @param seach 字符串
     */
    async seachProducts(seach: string) {
      return await this.post('/docment/seachProducts', { seach })
    }
    /**
     * 获取数据条目
     * @param param 
     */
    async GeneralGetInfo(param: params) {
      // $http.setHeader('name', encodeURI(store.state.name))
      const data = await this.post('/docment/Get_arg', param)
      return data
    }
    /**
     * 获取最新的新闻条目
     */
    async GetHomeNews() {
      const data = await $http.$get('/docment/GetHomeNews')// ({ url: '/api/GetHomeNews' })
      console.log({data});
      
      return data
    }
    /**
     * 获取代理商信息
     * @param city 代理商所在地
     */
    async GetBuyList(city: string) {
      console.log('sssss');
      
      const data = await this.post('/docment/Get_buy_li', { city })
      return data
    }
    /**
     * 获取下载资料信息
     * @param fileName 下载文件名
     */
    async Down(fileName: string) {
      const data = await this.post('/docment/Down', { fileName })
      return data
    }

    async GetContent(link: string) {
      const data = await this.post('/docment/GetContent', { link })
      return data
    }

    post(base: string, body: any) {
      /* console.log({process:Boolean(process),document:document||null});
      
      if(!process){
        console.log({document});
        
      }
      try {
        return $http.$post(base, body)
      } catch (error) {
        console.log({ error });
        return $axios.$post(base, body)
      } */
      return $axios.$post(base, body).catch(err=>{
        console.log("axios error");
        return 'axios error'
      })

    }
  }
  /* Api.axios.onRequest((config) => {
    const SiteName = ctx.store.state.name
    const i18n = ctx.app.i18n.locale
    config.params = { ...config.params || {}, SiteName, i18n }
    return config
  }) */
  inject('Api', new Api())
}

export default MyApi

/*
import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { params } from '../types/index'

const MyApi:Plugin = (ctx, inject) => {
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
*/
