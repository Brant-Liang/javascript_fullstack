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
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter
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