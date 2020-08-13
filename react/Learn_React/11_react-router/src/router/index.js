import Home from '../pages/home';
import About, { AboutHistory, AboutCulture, AboutContact, AboutJoinUs } from '../pages/about';
import Profile from '../pages/profile';
import User from '../pages/user.js';
import Login from '../pages/login.js';
import Product from '../pages/product';
import Detail from '../pages/detail.js';
import Detail2 from '../pages/detail2.js';
import Detail3 from '../pages/detail3.js';
import NoMatch from '../pages/noMatch.js';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about',
        exact: true,
        component: AboutHistory
      },
      {
        path: '/about/culture',
        component: AboutCulture
      },
      {
        path: '/about/contact',
        component: AboutContact
      },
      {
        path: '/about/join',
        component: AboutJoinUs
      }
    ]
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/product',
    component: Product
  },
  {
    path: '/detail',
    component: Detail
  }
]

export default routes;