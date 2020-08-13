import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './router';

/* import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import User from './pages/user.js';
import Login from './pages/login.js';
import Product from './pages/product';
import Detail from './pages/detail.js';
import Detail2 from './pages/detail2.js';
import Detail3 from './pages/detail3.js';
import NoMatch from './pages/noMatch.js'; */
import './App.css';

import { NavLink, Route, Switch, withRouter } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { to: '/', title: '首页' },
        { to: '/about', title: 'gua ' },
        { to: '/profile', title: '首页' },
      ]
    }
  }
  render() {
    const info = {name: 'Brant', age: 11}
    return (
      <div>
        {/* <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link> */}
        {/* <NavLink exact to="/" activeStyle={{color: 'red'}}>首页</NavLink>
          <NavLink to="/about" activeStyle={{color: 'red'}}>关于</NavLink>
          <NavLink to="/profile" activeStyle={{color: 'red'}}>我的</NavLink> */}
        <NavLink exact to="/" activeClassName="link-active">首页</NavLink>
        <NavLink to="/about" activeClassName="link-active">关于</NavLink>
        <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
        <NavLink to="/user" activeClassName="link-active">用户</NavLink>
        <NavLink to={`/detail/abc`} activeClassName="link-active">详情</NavLink>
        <NavLink to={`/detail2?name=brant&age=18`} activeClassName="link-active">详情2</NavLink>
        <NavLink to={{
           pathname: "/detail3",
           search: '?name=abc',
           state: info
          } 
        } activeClassName="link-active">详情2</NavLink>
        <button onClick={e => this.jumpToProduct()}>商品</button>
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/detail2" component={Detail2} />
          <Route path="/detail3" component={Detail3} />
          <Route component={NoMatch} />
        </Switch> */}
        { renderRoutes(routes) }
      </div>
    )
  }
  jumpToProduct() {
    this.props.history.push('/product')
  }
}

export default withRouter(App);
