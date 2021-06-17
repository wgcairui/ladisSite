import { Plugin, Context } from '@nuxt/types'
import { about, buy, buyList, caseList, cases, product, productList, router, support, supportAsid, supportList, vr } from '~/types/typing'

/**
   * 用于向服务器请求数据
   */
export class Api {
  ctx: Context

  constructor(ctx: Context) {
    this.ctx = ctx
    this.ctx.$axios.onRequest((config) => {
      config.headers.name = encodeURI(this.ctx.store.state.name)
      return config
    })
  }

  async GetContent(link: string) {
    const data = await this.ctx.$axios.$post('/docment/GetContent', { link })
    return data
  }

  /**
     * 获取代理商关于信息
     * @param site 
     * @param type 
     * @returns 
     */
  getAboutType(type: string) {
    return this.get<about>("getAboutType", { type })
  }

  /**
     * 获取所有路由
     * @returns 
     */
  getRout() {
    return this.get<router[]>("getRout")
  }

  /**
     * 获取所有vr列表
     * @returns 
     */
  getVrs() {
    return this.get<vr[]>("getVrs")
  }

  /**
   * 获取vr页面
   * @param link 
   * @returns 
   */
  getVr(link: string) {
    return this.get<vr>("getVr", { link })
  }

  /**
     * 获取经销商列表
     */
  getBuyList() {
    return this.get<buyList[]>("getBuyList")
  }

  /**
     * 获取所有经销商详细信息
     * @returns 
     */
  getBuysAll() {
    return this.get<buy[]>("getBuysAll")
  }

  /**
     * 获取指定的经销商信息
     * @param link 
     * @returns 
     */
  getBuyListLink(link: string) {
    return this.get<buyList[]>("getBuyListLink", { link })
  }

  /**
     * 获取所有案例列表
     * @param company 
     */
  getCaseLists() {
    return this.get<cases[]>("getCaseLists")
  }

  /**
     * 获取指定类型案例列表
     * @param company 
     */
  async getCaseListsType(type: string) {
    return this.get<cases[]>("getCaseListsType", { type })
  }

  /**
   * 获取指定案例
   * @param link 
   * @returns 
   */
  getCaselist(link: string) {
    return this.get<caseList>("getCaselist", { link })
  }

  /**
     * 获取所有新闻列表
     * @param company 
     */
  getNewsLists() {
    return this.get<cases[]>("getNewsLists")
  }

  /**
     * 获取指定类型新闻列表
     * @param company 
     */
  async getNewsListsType(type: string) {
    return this.get<cases[]>("getNewsListsType", { type })
  }

  /**
   * 获取指定新闻
   * @param link 
   * @returns 
   */
  getNewslist(link: string) {
    return this.get<caseList>("getNewslist", { link })
  }

  /**
     * 获取产品列表
     * @returns 
     */
  getProducts() {
    return this.get<product[]>("getProducts")
  }

  /**
    * 获取指定产品列表
    * @param type 
    * @returns 
    */
  getProductsType(type: string) {
    return this.get<product[]>("getProductsType", { type })
  }

  /**
   * 查询匹配产品信息
   * @param str 通配符
   * @returns 
   */
  getProductsReg(str: string) {
    return this.get<product[]>("getProductsReg", { str })
  }

  /**
   * 获取指定产品信息
   * @param link 
   * @returns 
   */
  getProductList(link: string) {
    return this.get<productList>("getProductList", { link })
  }

  /**
     * 获取侧边栏
     * @param type 
     * @returns 
     */
  getPagesType<T>(type: string) {
    return this.get<T[]>("getPagesType", { type })
  }

  /**
   * 获取下载支持
   * @param type 
   * @returns 
   */
  getSupportType(type: string) {
    return this.get<support[]>("getSupportType", { type })
  }

  /**
   * 获取教程支持
   * @param type 
   * @returns 
   */
  getSupportListsType(type: string) {
    return this.get<supportList[]>("getSupportListsType", { type })
  }

  /**
   * 获取支持单例
   * @returns 
   */
  getSupportLists() {
    return this.get<supportList[]>("getSupportLists")
  }

  /**
   * 获取支持单例
   * @param link 
   * @returns 
   */
  getSupportList(link: string) {
    return this.get<supportList>("getSupportList", { link })
  }

  /**
   * 获取支持单例
   * @param link 
   * @returns 
   */
  getSupport(link: string) {
    return this.get<support>("getSupport", { link })
  }


  async get<T>(path: string, data?: { [x: string]: string }) {
    try {
      return this.ctx.$axios.$get<T>(`/web/${path}?${new URLSearchParams(data).toString()}`)
    } catch (err) {
      throw new Error(err.message)
    }
  }

}

const MyApi: Plugin = (ctx, inject) => {
  inject('Api', new Api(ctx))
}

export default MyApi

