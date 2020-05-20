import React, { Fragment } from 'react';
import { GlobalStyle } from './style'
import { IconFontGlobalStyle } from './static/iconfont/iconfont'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
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
          <Route path="/detail" exact component={Detail}/>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
