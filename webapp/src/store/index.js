import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sendInfo: null,
    reciveInfo: null,
    address: null,
    subTitle: '',
    navVisible: false
  },
  actions: {
    SAVE_SEND_INFO: ({ commit }, info) => {
      commit('SAVE_SEND_INFO', info)
    },
    SAVE_RECIVE_INFO: ({ commit }, info) => {
      commit('SAVE_RECIVE_INFO', info)
    },
    FETCH_ADDRESS: ({ commit, state }, addr) => {
      if (!state.address) {
      }
    },
    SET_SUBTITLE: ({ commit }, { title }) => {
      commit('SET_SUBTITLE', { title })
    },
    TOGGLE_NAV_VISIBLE: ({ commit }) => {
      commit('TOGGLE_NAV_VISIBLE')
    }
  },
  mutations: {
    SAVE_SEND_INFO: (state, info) => {
      state.sendInfo = info
    },
    SAVE_RECIVE_INFO: (state, info) => {
      state.reciveInfo = info
    },
    TOGGLE_NAV_VISIBLE: (state) => {
      state.navVisible = true
    },
    SET_SUBTITLE: (state, { title }) => {
      state.subTitle = title
    }
  }
})
