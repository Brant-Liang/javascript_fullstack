import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { incrementAction,
         addAction,
         changeBannersAction,
         changeRecommendsAction } from '../store/actionCreators'
import axios from 'axios';
class Home extends PureComponent {
  componentDidMount() {
    axios({
      url: 'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
      const data = res.data.data
      console.log('banner', data.banner.list);
      console.log('recommend', data.recommend.list);
      this.props.changeBanners(data.banner.list)
      this.props.changeRecommends(data.recommend.list)
    })
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
  changeBanners(banners) {
    dispatch(changeBannersAction(banners));
  },
  changeRecommends(recommends) {
    dispatch(changeRecommendsAction(recommends));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);