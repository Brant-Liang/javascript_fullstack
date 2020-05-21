import React, { Fragment } from 'react';
import { GlobalStyle } from './style'
import { IconFontGlobalStyle } from './static/iconfont/iconfont'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login/Login'
import Write from './pages/write'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store/index'
function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <IconFontGlobalStyle/>
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/> 
          <Route path="/detail/:id" exact component={Detail}/>
          <Route path="/write" exact component={Write}/>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
