import { createStore } from 'vuex'

import createPersistedState from "vuex-persistedstate"

export default createStore({
  state: {
    token: null,
    id: null,
    username: null,
    email: null
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
    },
    email: state => {
      return state.email
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
    },
    setEmail(state, email) {
      state.email = email
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
