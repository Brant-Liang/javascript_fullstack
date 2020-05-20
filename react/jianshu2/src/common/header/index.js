import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addtion,
  Button
} from './style';
import { actionCreators } from './store';
import { Link } from 'react-router-dom'

class Header extends Component {
  getListArea() {
    const { focused, searchList, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const jsSearchList = searchList.toJS();
    const pageList = [];
    if (jsSearchList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (jsSearchList[i]) {
          pageList.push(
            <SearchInfoItem key={jsSearchList[i]}>{jsSearchList[i]}</SearchInfoItem>
          )
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch onClick={() => {
              handleChangePage(page, totalPage, this.spinIcon)
            }}>
              <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
              换一批
          </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
  render() {
    const { focused, mouseIn, handleInputBlur, handleInputFocus, searchList } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
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
              in={focused || mouseIn}
              classNames="slide"
            >
              <NavSearch
                onBlur={handleInputBlur}
                onFocus={() => {
                  handleInputFocus(searchList)
                }}
                className={focused || mouseIn ? 'focused' : ''}>
              </NavSearch>
            </CSSTransition>
            <i className={focused || mouseIn ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe686;</i>
            {this.getListArea()}
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
}
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    searchList: state.getIn(['header', 'searchList']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getSearchList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, "");
      console.log(originAngle);
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      }
      else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header)