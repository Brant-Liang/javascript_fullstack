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
    meta: {
      title: '首页'
    },
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
    component: About,
    meta: {
      title: '关于'
    },
    beforeEnter:(to, from, next) => {
      console.log('about beforeEnter');
      next()
    }
  },
  {
    path: '/user/:userid',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
//前置钩子（guard）
router.beforeEach((to, from, next) => {
  // 从from到to
  document.title = to.matched[0].meta.title
  // console.log(to);
  // console.log('---beforeEach---');
  next()
})
// 后置钩子
router.afterEach((to, from) => {
  // console.log('---afterEach---');
})
// 3、将router对象导入vue实例中
export default router