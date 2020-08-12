import React, { PureComponent } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom';

function AboutHistory (props) {
  return <h2>企业成立于2000年</h2>
}
function AboutCulture (props) {
  return <h2>创新发展</h2>
}
function AboutContact (props) {
  return <h2>联系方式： 1233455</h2>
}
function AboutJoinUs (props) {
  return <h2>投递简历到aaa@123.com</h2>
}
export default class About extends PureComponent {
  render() {
    return (
      <div>
        <NavLink exact to="/about" activeClassName="about-active">企业历史</NavLink>
        <NavLink exact to="/about/culture" activeClassName="about-active">企业文化</NavLink>
        <NavLink exact to="/about/contact" activeClassName="about-active">联系我们</NavLink>
        <button onClick={e => this.jumpToJoin()}>加入我们</button>
        <Switch>
          <Route exact path="/about" component={AboutHistory} />
          <Route path="/about/culture" component={AboutCulture} />
          <Route path="/about/contact" component={AboutContact} />
          <Route path="/about/join" component={AboutJoinUs} />
        </Switch>
      </div>
    )
  }
  jumpToJoin() {
    // console.log(this.props.history);
    // console.log(this.props.location);
    // console.log(this.props.match);
    this.props.history.push("/about/join")
  }
}
