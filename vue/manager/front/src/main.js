import Vue from 'vue'
import VueRouter from 'vue-router'
const Customer = () => import('./components/Customer')
const About = () => import('./components/About')
import App from './App.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/customer',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
