import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modulesA from './modules/moduleA'
// 1.安装插件
Vue.use(Vuex)


// 2.创建对象
const state = {
  count: 1000,
    students: [
      {id: 110, name: 'lc', age: 18},
      {id: 110, name: 'kobe', age: 42},
      {id: 110, name: 'james', age: 35},
      {id: 110, name: 'curry', age: 10}
    ],
    info: {
      name: 'kobe',
      age: 41,
      height: 1.98
    }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
    
  modules: {
    a: modulesA
  }
})

// 导出
export default store