export const state = () => ({
  test: 'test',
  isBusy: false,
  isError: false,
  message: ''
})

export const mutations = {
  setTest(state, payload) {
    state.test = payload
  },
  setBusy(state, payload) {
    state.isBusy = payload
  },
  setError(state, payload) {
    state.isError = payload
  },
  setMessage(state, payload) {
    state.message = payload
  }
}

export const actions = {
  async nuxtServerInit({ commit, state }, { app }) {
    // 初回アクセスに必ず呼び出す
  },
  getTest({ commit, state, app, dispatch }, payload) {
    commit('setTest', payload)
  }
}

export const getters = {
  test(state) {
    return state.test
  },
  isBusy(state) {
    return state.isBusy
  },
  isError(state) {
    return state.isError
  },
  message(state) {
    return state.message
  }
}
