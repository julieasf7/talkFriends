import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
    id: null,
    username: null
  },
  getters: {
    token: state => {
      return state.token
    },
    loggedId: state => {
      return state.id
    },
    username: state => {
      return state.username
    }
  },
  mutations: {
    setToken(state, t) {
      state.token = t
    },
    setId(state, id) {
      state.id = id
    },
    setUsername(state, username) {
      state.username = username
    }
  },
  actions: {
  },
  modules: {
  }
})
