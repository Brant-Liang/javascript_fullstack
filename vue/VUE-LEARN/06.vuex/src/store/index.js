import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    count: 1000,
    students: [
      {id: 110, name: 'lc', age: 18},
      {id: 110, name: 'kobe', age: 42},
      {id: 110, name: 'james', age: 35},
      {id: 110, name: 'curry', age: 10}
    ]
  },
  mutations: {
    //方法
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    // Payload 负载
    incrementCount(state, payload) {
      // console.log(payload);
      state.count += payload.count
    },
    addStudent(state, std) {
      state.students.push(std)
    }
  },
  actions: {

  },
  getters: {
    powerCount(state) {
      return state.count * state.count
    },
    more20stds(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20sLength(state, getters) {
      return getters.more20stds.length
    },
    more20Name(state, getters) {
      let more20name = []
      for(let i = 0; i < getters.more20sLength; i++) {
        more20name.push(getters.more20stds[i].name)
      }
      return more20name
    },
    moreAgeStds(state) {
      return age => state.students.filter(s => s.age > age)
    }
  },
  modules: {

  }
})

// 导出
export default store