import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { defaults } from './user'
export const state = () => ({
  localUrl: '',
  defaults
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
}

export const mutations: MutationTree<RootState> = {
  SETHOST (state, payload) {
    state.localUrl = payload.localUrl
  }
}

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit ({ commit }, { req }) {
    const forwardedHost = req.headers['x-forwarded-host']
    let host
    try {
      host = req.headers.host.split(':')[0]
    } catch (error) {
      console.log({ host: req.headers.host })
    }
    commit('SETHOST', { localUrl: forwardedHost || host })
  }
}
