import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writter'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import { actionCreator } from './store'
class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }
        
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow())
  }
}
const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"])
})
const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    const action = actionCreator.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    console.log(document.documentElement.scrollTop);
  }
})

export default connect(mapState, mapDispatchToProps)(Home)