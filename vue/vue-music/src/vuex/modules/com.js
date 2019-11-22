import * as types from './types'

// types: { COM_SHOW_SIDE_BAR }
const state = {
  showSidebar: false,
  searchHistory: ['123','adsd']
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
  },
  [types.COM_SAVE_SEARCH_HISTORY] (state, status) {
    state.searchHistory = status
  }
}

const getters = {
  showSidebar: state => state.showSidebar,
  searchHistory: state => state.searchHistory
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  saveSearchHistory ({commit}, query) {
    let searchHistory = [query, ...state.searchHistory.slice]
    searchHistory = [...new Set(searchHistory)]
    commit(type.COM_SAVE_SEARCH_HISTORY, searchHistory)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}