export default {
  // aUpdateInfo(context, payload) {
  //   setTimeout(() => {
  //     context.commit('updateInfo')
  //     // context.state.info.name = "Brant"
  //     console.log(payload.message)
  //     payload.success()
  //   }, 1000)
  // }
  aUpdateInfo({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('updateInfo')
        console.log(payload);
        resolve('11111')
      }, 1000)
    })
  }
}