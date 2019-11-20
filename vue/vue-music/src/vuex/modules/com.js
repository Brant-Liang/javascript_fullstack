import * as types from './types'

// types: { COM_SHOW_SIDE_BAR }
const state = {
  showSidebar: false
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
  }
}

const getters = {
  showSidebar: state => state.showSidebar
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}