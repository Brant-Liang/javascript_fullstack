import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

//创建对象
const store = new Vuex.Store({
  state: {
    cityName: '定位中..'
  },
  mutations: {
    choiceAddress(state, payLoad) {
      state.cityName = payLoad
    },
  }
})

export default store;