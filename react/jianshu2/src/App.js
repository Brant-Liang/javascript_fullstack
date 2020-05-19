import React, { Fragment } from 'react';
import { GlobalStyle } from './style'
import { IconFontGlobalStyle } from './static/iconfont/iconfont'
import Header from './common/header'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store/index'
function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <IconFontGlobalStyle/>
      <Provider store={store}>
        <Header/>
        <BrowserRouter>
          <Route path="/" exact render={() => <div>home</div>}/>
          <Route path="/detail" exact render={() => <div>detail</div>}/>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
