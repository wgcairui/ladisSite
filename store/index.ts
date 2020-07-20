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
    const agentConfig = await $axios.$get('/config/agent', {
      params: { name: state.defaults.name }
    })
    const linkFrend = await $axios.$get('/config/linkFrend')
    commit('SETAGENTCONFIG', { agentConfig, linkFrend })

    // console.log({ linkFrend })
    const forwardedHost = req.headers['x-forwarded-host']
    const host = req.headers.host?.split(':')[0]
    commit('SETHOST', { localUrl: forwardedHost || host })
  }
}
