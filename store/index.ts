import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Context } from '@nuxt/types'
import { defaults } from './user'
export const state = () => ({
  localUrl: '',
  defaults,
  agentConfig: {},
  linkFrend: []
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
    state.linkFrend = payload.linkFrend
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit ({ commit, state }, { req, $axios }:Context) {
    const forwardedHost = req.headers['x-forwarded-host']
    const host = req.headers.host?.split(':')[0]
    commit('SETHOST', { localUrl: forwardedHost || host })

    const WagentConfig = $axios.$get('/config/agent', {
      params: { name: state.defaults.name }
    })
    const WlinkFrend = $axios.$get('/config/linkFrend')

    await Promise.all([WagentConfig, WlinkFrend]).then(([agentConfig, linkFrend]) => {
      commit('SETAGENTCONFIG', { agentConfig, linkFrend })
    }).catch((e) => {
      console.log(e)
    })
  }
}
