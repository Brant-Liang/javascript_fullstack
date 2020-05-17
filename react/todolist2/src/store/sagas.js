import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './ActionTypes'
import { initListAction } from './ActionCreator'
import axios from 'axios'


function* getInitList() { 
  try {
    const res = yield axios.get('http://localhost:3000/list')
    const action = initListAction(res.data);
    yield put(action);
  } catch(e) {
    console.log('网络请求失败',e);
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;