import { createStore, applyMiddleware, compose } from 'redux';

//1、引入thunkMiddleware中间件
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import saga from './saga'
import reducer from './reducer.js';

// composeEnhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//2、创建saga中间件
const sagaMiddleware = createSagaMiddleware();

//应用中间件
const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware);
const store = createStore(reducer, composeEnhancers(storeEnhancer));

sagaMiddleware.run(saga);

export default store;