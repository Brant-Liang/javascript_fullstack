import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 1
//   },
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

// 2、axios发送并发请求
axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})])
.then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
}))