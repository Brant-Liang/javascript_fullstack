import * as types from './mutations-types'
export default {
  //方法
  [types.INCREMENT](state) {
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
  },
  updateInfo(state) {
    state.info.name = 'Brant'
    //state.info['address'] = 'Los Angeles'
    // 添加和删除必须用下面两个
    // Vue.set(state.info, 'address', 'Los Angeles')
    // Vue.delete(state.info, 'age')
  }
}