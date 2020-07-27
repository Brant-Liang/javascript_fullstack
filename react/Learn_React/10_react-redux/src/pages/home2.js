import React from 'react'
import { connect } from '../utils/connect'
import { incrementAction, addAction } from '../store/actionCreators'

function Home(props) {
  return (
    <div>
      <h2>Home</h2>
      <h2>当前计数：{props.counter} </h2>
      <button onClick={e => props.increment()} >+1</button>
      <button onClick={e => props.addNumber(5)} >+5</button>
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
  addNumber: function(number) {
    dispatch(addAction(number))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)