import React from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  Addtion,
  Button
} from './style';
import { INPUT_BLUR, INPUT_FOCUES} from '../../store/actionTypes'

const Header = function(props) {
  const { focused, handleInputBlur, handleInputFocus } = props;
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe602;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            timeout={500}
            in={focused}
            classNames="slide"
            >
            <NavSearch
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              className={focused ? 'focused' : ''}>
            </NavSearch>
          </CSSTransition>
          <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe686;</i>
        </SearchWrapper>
      </Nav>
      <Addtion>
        <Button className="writting">
          <i className="iconfont">&#xe611;</i>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addtion>
    </HeaderWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputBlur() {
      const action = {
        type: INPUT_BLUR
      };
      dispatch(action)
    },
    handleInputFocus() {
      const action = {
        type: INPUT_FOCUES
      };
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header)