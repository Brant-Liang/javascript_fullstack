import allA, { age, name } from './js/mathUntils.js'
console.log(allA.add(20, 30));
console.log(allA.mul(20, 30));
console.log(age);
console.log(name);



// 依赖css文件
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')

document.writeln(`<h2>你好啊</h2>`)


// 使用 vue

import Vue from 'vue'

import App from './vue/app.vue'

new Vue({
  // template 会替换 el
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})