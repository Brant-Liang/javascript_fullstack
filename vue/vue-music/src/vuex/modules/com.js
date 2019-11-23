import * as types from '../types'

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
  },
  [types.COM_DELETE_SEARCH_HISTOEY] (state, index) {
    state.searchHistory.splice(index, 1)
  },
  [types.COM_DELETE_ALL_SEARCH_HISTOEY] (state) {
    state.searchHistory = []
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
  saveSearchHistory ({commit,state}, query) {
    let searchHistory = [query, ...state.searchHistory.slice()]
    searchHistory = [...new Set(searchHistory)]
    commit(types.COM_SAVE_SEARCH_HISTORY, searchHistory)
  },
  deleteSearchHistory ({commit}, index) {
    commit(types.COM_DELETE_SEARCH_HISTOEY, index)
  },
  deleteAll ({commit}) {
    commit(types.COM_DELETE_ALL_SEARCH_HISTOEY)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}