import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { incrementAction,
         addAction, getHomeMultdataAction } from '../store/actionCreators'
class Home extends PureComponent {
  componentDidMount() {
    
    this.props.getHomeMultdata();
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h2>当前计数：{this.props.counter} </h2>
        <button onClick={e => this.props.increment()} >+1</button>
        <button onClick={e => this.props.addNumber(5)} >+5</button>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  counter: state.counter
})
const mapDispatchToProps = dispatch => ({
  increment: function() {
    dispatch(incrementAction());
  },
  addNumber: function(number) {
    dispatch(addAction(number));
  },
  getHomeMultdata() {
    dispatch(getHomeMultdataAction)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);