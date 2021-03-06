import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/components/HelloWorld')
import Login from '@/components/Login'
import Mine from '@/components/mine'
import Detail from '@/components/Detail'
import Mine2 from '@/components/mine2'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      children:[
        {
          path: 'mine2',
          component: Mine2
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
