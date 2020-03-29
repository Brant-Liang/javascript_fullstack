import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu} from 'antd';
import { adminRoutes } from '../../routes'
const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(router => router.isShow)
class Frame extends Component {
  render() {
    return (
      <Layout>
        <Header className="header" style={{backgroundColor: '#428BCA'}}>
          <span style={{color: '#fff',fontSize: '30px'}}>后台管理系统</span>
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