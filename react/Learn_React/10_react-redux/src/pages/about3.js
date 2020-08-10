import React from 'react'
// import { connect } from '../utils/connect'
import { connect } from 'react-redux';
import { incrementAction, subAction } from '../store/actionCreators'
function About(props) {
  return (
    <div>
      <hr />
      <h2>About</h2>
      <h2>当前计数：{props.counter} </h2>
      <button onClick={e => props.increment()} >+1</button>
      <button onClick={e => props.subNumber(5)}>-5</button>
      <h1>Banner</h1>
      {
        props.banners.map((item, index) => (
          <li key={item.acm}>{item.title}</li>
        ))
      }
      <h1>Recommend</h1>
      {
        props.recommends.map((item, index) => (
          <li key={item.acm}>{item.title}</li>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter,
  banners: state.banners,
  recommends: state.recommends
})
const mapDispatchToProps = dispatch => ({
  increment: function() {
    dispatch(incrementAction())
  },
  subNumber: function(num) {
    dispatch(subAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)