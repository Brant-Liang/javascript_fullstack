import React from 'react';
import ReactDOM from 'react-dom';
import { Globalstyle } from './style';
import { IconGlobalstyle } from './statics/icon-font/iconfont.js'
import App from './App';

ReactDOM.render(
  <div>
    <Globalstyle/>
    <IconGlobalstyle/>
    <App />
  </div>,
  document.getElementById('root'));
