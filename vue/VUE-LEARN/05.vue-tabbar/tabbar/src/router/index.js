import Vue from 'vue'
import Router from 'vue-router'
const Home  = () => import('../views/home/Home')
const Category = () => import('../views/category/Category.vue')
const ShoppingCart = () => import('../views/shoppingCart/ShopingCart.vue')
const Mine = () => import('../views/mine/Mine.vue')
Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: Home,
    component: Home
  },
  {
    path: '/category',
    name: Category,
    component: Category
  },
  {
    path: '/shoppingCart',
    name: ShoppingCart,
    component: ShoppingCart
  },
  {
    path: '/mine',
    name: Mine,
    component: Mine
  },
]
export default new Router({
  routes,
  mode: 'history'
})
