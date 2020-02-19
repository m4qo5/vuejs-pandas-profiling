import { jwt } from '@/services/jwt'
import { SET_TOKEN, SET_CURRENT_USER, PURGE_TOKEN } from '../mutation.types'
import { http } from '@/services/http'


const state = {
  isAuthenticated: !!jwt.getToken(),
  currentUser: []
}

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  currentUser: state => state.currentUser
}

export const mutations = {
  [PURGE_TOKEN](state) {
    state.isAuthenticated = false
    state.currentUser = []
    jwt.removeToken()
    jwt.removeCurrentUser()
  },
  [SET_TOKEN](state, token) {
    state.isAuthenticated = true
    jwt.saveToken(token)

  },
  [SET_CURRENT_USER](state, user) {
    jwt.saveCurrentUser(user)
    state.currentUser = JSON.parse(jwt.getCurrentUser())
  }
}

const actions = {
  signIn({ commit, dispatch }, payload) {
    return http.auth.createToken(payload)
      .then(data => {
        commit(SET_TOKEN, data.access)
        return dispatch('getCurrentUser')
      })
  },
  signUp({ commit }, payload) {
    return http.auth.createUser(payload)
  },
  signOut({ commit }) {
    commit(PURGE_TOKEN)
  },
  getCurrentUser({ commit }) {
    return http.users.me()
      .then(data => {
        commit(SET_CURRENT_USER, data)
      })
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}