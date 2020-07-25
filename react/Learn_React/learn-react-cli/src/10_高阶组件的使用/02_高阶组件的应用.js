import React, { PureComponent } from 'react'

//定义一个高阶组件
function enhanceRegionProps(WarppedComponent) {
  return props => {
    return <WarppedComponent {...props} region="中国"/>
  }
}

class Home extends PureComponent {
  render() {
    return (
      <h2>Home: {`昵称: ${this.props.nikname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <h2>About: {`昵称: ${this.props.nikname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
    )
  }
}
const EnhanceHome = enhanceRegionProps(Home);
const EnhanceAbout = enhanceRegionProps(About);
class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome nikname="Brant" level={90} />
        <EnhanceAbout nikname="Ariel" level={80} />
      </div>
    )
  }
}

export default App;