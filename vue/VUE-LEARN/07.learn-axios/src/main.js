import Vue from 'vue'
import App from './App'

import { request } from './network/request'

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

// 使用全局配置再进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
// 2、axios发送并发请求
// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })])
// .then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// axios({
//   url: '/category'
// })

// 创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// const instance2 = axios.create({
//   baseURL: '222.111.33.33:9090',
//   timeout: 10000,
//   // headers: {}
// })

// 5、封装axios函数
// request({
//   url: '/home/data',
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// request({
//   baseConfig: {
//     url: '/home/data',
//   },
//   success: (res) => {
//     console.log(res);
//   },
//   fail: (err) => {
//     console.log(err);
    
//   }
// })

request({
  url: '/home/data'
}).then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
})