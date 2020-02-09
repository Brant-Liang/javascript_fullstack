import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  return instance(config)
}

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }
// export function request(config, success, fail) {
//   // 1、 创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config).then(res => {
//     success(res)
//   }).catch(err => {
//     fail(err)
//   })
// }

// export function request(config) {
//     // 1、 创建axios实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config.baseConfig).then(res => {
//       config.success(res)
//     }).catch(err => {
//       config.fail(err)
//     })
//   }