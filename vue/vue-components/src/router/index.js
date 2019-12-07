import Vue from 'vue'
import Router from 'vue-router'
import A from '@/components/pages/a'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'A',
      component: A
    }
  ]
})
