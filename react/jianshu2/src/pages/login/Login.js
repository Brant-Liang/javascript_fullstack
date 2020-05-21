import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, LoginInput, LoginButton } from './style'
import { actionCreator } from './store'

class Login extends PureComponent {
  render() {
    const { login } = this.props;
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <LoginInput placeholder='账号' ref={(input) => { this.account = input }} />
            <LoginInput placeholder='密码' type="password" ref={(input) => { this.password = input }} />
            <LoginButton onClick={() => { this.props.handleLogin(this.account, this.password) }}>登录</LoginButton>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/"/>
    }
  }
}

const mapState = (state) => ({
  login: state.getIn(["login", "login"])
})

const mapDispatch = (dispatch) => ({
  handleLogin(accountElem, passwordElem) {
    dispatch(actionCreator.login(accountElem.value, passwordElem.value));
  }
})

export default connect(mapState, mapDispatch)(Login);
