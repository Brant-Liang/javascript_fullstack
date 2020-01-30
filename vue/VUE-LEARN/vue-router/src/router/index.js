// 配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/home'
// import About from '../components/about'
// import User from '../components/user'

const Home = () => import('../components/home.vue')
const HomeNews = () => import('../components/homeNews.vue')
const HomeMessage = () => import('../components/homeMessage.vue')
const About = () => import('../components/about.vue')
const User = () => import('../components/user.vue')
const Profile = () => import('../components/Profile.vue')
// 1.通过Vue.use(插件) 安装插件
Vue.use(VueRouter)
// 执行VueRouter.install

// 2、创建路由对象
const routes = [
  {
    path: '/',
    redirect: '/home' // 重定向
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userid',
    component: User
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 3、将router对象导入vue实例中
export default router