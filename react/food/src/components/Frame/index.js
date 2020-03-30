import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Dropdown, Avatar} from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { adminRoutes } from '../../routes'
import { clearToken } from '../../utils/auth'
import './index.css'
const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(router => router.isShow)

function popMenu(props){
  return (<Menu onClick={(p) => {
    if(p.key === 'out') {
      clearToken()
      props.history.push('./login')
    }else {
      if(p.key === 'notify') {
        props.history.push('./admin/notices')
      }
    }
  }}>
    <Menu.Item key="notify">通知中心</Menu.Item>
    <Menu.Item key="setting">设置</Menu.Item>
    <Menu.Item key="out">退出登录</Menu.Item>
  </Menu>)
} 
  
class Frame extends Component {
  render() {
    return (
      <Layout>
        <Header className="header" style={{backgroundColor: '#428BCA'}}>
          <span style={{color: '#fff',fontSize: '30px'}}>后台管理系统</span>
          <Dropdown overlay={popMenu(this.props)}>
            <div style={{color: '#fff',fontSize: '16px'}}>
              <Avatar>U</Avatar>
              <span>管理员</span>
              <CaretDownOutlined />
            </div>
          </Dropdown>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {routes.map(route=> {
                return <Menu.Item key={route.path} onClick={p=> this.props.history.push(p.key)}>
                  <route.icon/>
                  {route.title}
                </Menu.Item>
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: '16px'}}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                backgroundColor: '#fff'
              }}
            >
            {this.props.children}
          </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(Frame)