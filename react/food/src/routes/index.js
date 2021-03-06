import Login from "../pages/Login";
import List from "../pages/admin/products/List";
import Edit from "../pages/admin/products/Edit";
import Index from '../pages/admin/dashboard/index';
import PageNotFound from "../pages/PageNotFound";
import {
  ShopOutlined,
  AreaChartOutlined
} from '@ant-design/icons';
import Notices from "../pages/admin/notices";
export const mainRoutes = [{
  path: '/login',
  component: Login
}, {
  path: '/404',
  component: PageNotFound
}]
export const adminRoutes = [{
  path: '/admin/dashboard',
  component: Index,
  isShow: true,
  title: '看板',
  icon: AreaChartOutlined
},
{
  path: '/admin/products',
  component: List,
  isShow: true,
  exact: true,
  title: '商品管理',
  icon: ShopOutlined
},
{
  path: '/admin/products/edit/:id?',
  isShow: false,
  component: Edit
},
{
  path: '/admin/notices',
  isShow: false,
  component: Notices
},


]