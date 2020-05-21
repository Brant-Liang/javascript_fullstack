import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

class Write extends Component {
  render() {
    const { stateStatus } = this.props;
    if(stateStatus) {
      return (
        <div>写文章</div>
      )
    } else {
      return <Redirect to="/login"/>
    }
  }
}
const mapStateToProps = (state) => ({
  stateStatus: state.getIn(['login', 'login'])
})
export default connect(mapStateToProps)(Write)