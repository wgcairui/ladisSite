import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  localUrl: '',
  localSite: true
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
}

export const mutations: MutationTree<RootState> = {
  SETHOST (state, payload) {
    state.localUrl = payload.localUrl
    state.localSite = payload.localSite
  }
}

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit ({ commit }, { req }) {
    const forwardedHost = req.headers['x-forwarded-host']
    const host = req.headers.host.split(':')[0]
    // console.log({forwardedHost,host});

    if (req) {
      let localUrl = forwardedHost || host
      let localSite = true
      switch (localUrl) {
        case 'localhost':
        case '116.62.48.175':
        case 'www.ladis.com.cn':
          localSite = true
          break
        default:
          localUrl = 'localhost'
          localSite = true
          break
      }
      commit('SETHOST', { localUrl, localSite })
    }
  }
}
