import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Context } from '@nuxt/types'
export const state = () => ({
  localUrl: '',
  name: '',
  hm: '',
  showProduct: true,
  showBuy: false,
  showCase: true,
  showNews: true,
  showLaungua: false,
  agentConfig: {},
  linkFrend: [] as any[]
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
}

export const mutations: MutationTree<RootState> = {
  SETHOST(state, payload) {
    state.localUrl = payload.localUrl
  },
  /**
   * 设置网站运行初始参数
   * @param state 
   * @param payload 
   */
  SETAGENTCONFIG(state, payload) {
    state.agentConfig = payload.agentConfig
    const linkFrend = (<{ name: string }[]>payload.linkFrend).filter(el => el.name !== state.name)
    state.linkFrend = linkFrend
    state.hm = payload.agentConfig.hm
    state.name = payload.agentConfig.name
    state.showBuy = payload.agentConfig.showBuy || state.showBuy
    state.showCase = payload.agentConfig.showCase || state.showCase
    state.showLaungua = payload.agentConfig.showLaungua || state.showLaungua
    state.showNews = payload.agentConfig.showNews || state.showNews
    state.showProduct = payload.agentConfig.showProduct || state.showProduct
  }
}

export const actions: ActionTree<RootState, RootState> = {
  /**
   * 每个用户都会请求获取代理商配置的运行参数
   * @param param0 
   * @param param1 
   */
  async nuxtServerInit({ commit }, { req, $axios, env }: Context) {
    const forwardedHost = req.headers['x-forwarded-host']
    const host = req.headers.host?.split(':')[0]
    commit('SETHOST', { localUrl: forwardedHost || host })

    const WagentConfig = $axios.$get('/config/agent?name=' + encodeURI(process.env.NAME!))
    
    
    const WlinkFrend = $axios.$get('/config/linkFrend')

    await Promise.all([WagentConfig, WlinkFrend]).then(([agentConfig, linkFrend]) => {
      commit('SETAGENTCONFIG', { agentConfig, linkFrend })
    }).catch((e) => {})
  }
}
