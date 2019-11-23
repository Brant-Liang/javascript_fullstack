//封装axios
import Vue from 'vue'
import axios from 'axios'
const vue = new Vue()

// axios设置
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://localhost:3000'

//判断返回状态,响应拦截 配置
axios.interceptors.response.use((res) => {
  if(res.data.code !== 200) {
    alert('网络异常')
    return Promise.reject(res)
  }
  return res
}, (error) => {
  alert('网络异常')
  return Promise.reject(error)
})

export function fetchGet (url, param) {
  return new Promise ((resolve, reject) => {
    axios.get(url, {
      params: param
    })
    .then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch(() => {
      reject(error)
    })
  })
}

export default {
  // 用户登录
  Login(params){
    return fetchGet('/login', params)
  },
  // banners
  BannerList (params) {
    return fetchGet('/banner', params)
  },
  //歌单
  DiscList (params) {
    return fetchGet('/top/playlist', params)
  },
  HotSearchKey () {
    return fetchGet('/search/hot')
  },
  MusicSearch (params) {
    return fetchGet('/search', params)
  },
  //根据ID获取歌曲的url
  MusicUrl (id) {
    return fetchGet('/song/url', {id})
  }
}