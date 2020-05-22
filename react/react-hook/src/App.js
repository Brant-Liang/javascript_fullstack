import React from 'react';
import Header from './header'
import UseState from './useState'
import UseEffect from './useEffect'
import UseRef from './useRef'
import { BrowserRouter, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={UseState} />
        <Route path="/useState" component={UseState} />
        <Route path="/useEffect" exact component={UseEffect} />
        <Route path="/useRef" exact component={UseRef} />
      </BrowserRouter>
    </div>
  );
}

export default App;
