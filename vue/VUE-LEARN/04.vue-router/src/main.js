import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* Vue.prototype  */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //将路由挂载到Vue实例上
  render: h => h(App)
})

console.log(router);