export default {
  state: {
    name: '我是模块a'
  },
  mutations: {
    changeA(state) {
      state.name = '我是改变了的模块a内容'
    }
  }
}