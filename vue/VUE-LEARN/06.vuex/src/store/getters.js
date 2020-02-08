export default {
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
    for (let i = 0; i < getters.more20sLength; i++) {
      more20name.push(getters.more20stds[i].name)
    }
    return more20name
  },
  moreAgeStds(state) {
    return age => state.students.filter(s => s.age > age)
  }
}