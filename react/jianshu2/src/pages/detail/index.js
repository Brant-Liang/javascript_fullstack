import React, { PureComponent } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreator } from './store'
class Detail extends PureComponent {
  render() {
    const { title, content } = this.props;
    console.log(this.props.match.params.id);
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id); 
  }
  
}

const mapState = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail","content"])
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreator.getDetail(id));
  }
})

export default  connect(mapState, mapDispatch)(withRouter(Detail));
