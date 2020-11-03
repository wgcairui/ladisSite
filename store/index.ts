import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Context } from '@nuxt/types'
export const state = () => ({
  localUrl: '',
  name: process.env.NAME || 'localhost',
  hm: process.env.CODE_HM || '',
  showProduct: process.env.SHOW_PRODUCT ? Boolean(process.env.SHOW_PRODUCT) : true,
  showBuy: process.env.SHOW_BUY ? Boolean(process.env.SHOW_BUY) : false,
  showCase: process.env.SHOW_CASE ? Boolean(process.env.SHOW_CASE) : true,
  showNews: process.env.SHOW_NEWS ? Boolean(process.env.SHOW_NEWS) : true,
  showLaungua: process.env.SHOW_LAUNGUA ? Boolean(process.env.SHOW_LAUNGUA) : false,
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
    const linkFrend = (<{name:string}[]>payload.linkFrend).filter(el => el.name !== state.name)
    state.linkFrend = linkFrend
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit ({ commit, state }, { req, $axios }:Context) {
    const forwardedHost = req.headers['x-forwarded-host']
    const host = req.headers.host?.split(':')[0]
    commit('SETHOST', { localUrl: forwardedHost || host })

    const WagentConfig = $axios.$get('/config/agent', {
      params: { name: state.name }
    })
    const WlinkFrend = $axios.$get('/config/linkFrend')

    await Promise.all([WagentConfig, WlinkFrend]).then(([agentConfig, linkFrend]) => {
      commit('SETAGENTCONFIG', { agentConfig, linkFrend })
    }).catch((e) => {
      console.log(e)
    })
  }
}
