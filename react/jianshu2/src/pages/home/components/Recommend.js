import React, { PureComponent } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'
class Recommend extends PureComponent {
  render() {
    const { recommendList } = this.props;
    return (
      <RecommendWrapper>
        {
          recommendList.map((item) => {
            return <RecommendItem key={item.get("id")} imgUrl={item.get("imgUrl")}></RecommendItem>
          })
        }
      </RecommendWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  recommendList: state.getIn(["home", "recommend"])
})
export default connect(mapStateToProps)(Recommend)
