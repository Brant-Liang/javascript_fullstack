let url = require('url')
let request = {
  get url () { // 这样就可以用ctx.request.url取值
    return this.req.url
  },
  get path() {
    return url.parse(this.req.url).pathname
  },
  get query() {
    return url.parse(this.req.url).query
  }
}

url // 用get 直接调用

module.exports = request