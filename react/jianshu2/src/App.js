import React, { Fragment } from 'react';
import { GlobalStyle } from './style'
import { IconFontGlobalStyle } from './static/iconfont/iconfont'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store/index'
function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <IconFontGlobalStyle/>
      <Provider store={store}>
        <Header/>
      </Provider>
    </Fragment>
  );
}

export default App;
