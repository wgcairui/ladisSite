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
  SETHOST (state, payload) {
    state.localUrl = payload.localUrl
  },
  SETAGENTCONFIG (state, payload) {
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
    // console.log(state)
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit ({ commit }, { req, $http, env }: Context) {
    const forwardedHost = req.headers['x-forwarded-host']
    const host = req.headers.host?.split(':')[0]
    commit('SETHOST', { localUrl: forwardedHost || host })
    // console.log({location:'store',env,p:process.env});
    
    const WagentConfig = $http.$get('/config/agent?name=' + encodeURI(process.env.NAME!))
    const WlinkFrend = $http.$get('/config/linkFrend')

    await Promise.all([WagentConfig, WlinkFrend]).then(([agentConfig, linkFrend]) => {
      // console.log({ name: process.env.NAME })
      commit('SETAGENTCONFIG', { agentConfig, linkFrend })
    }).catch((e) => {
      console.log(e)
    })
  }
}
