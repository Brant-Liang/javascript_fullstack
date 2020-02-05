import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    count: 1000
  },
  mutations: {
    
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

// 导出
export default store