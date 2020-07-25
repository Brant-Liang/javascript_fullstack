import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

// function enhanceComponent(WrappedComponent) {
//   class NewComponent extends PureComponent {
//     render() {
//       return <WrappedComponent {...this.props}/>
//     }
//   }
//   NewComponent.displayName = 'Brant'
//   return NewComponent
// }

function enhanceComponent2(WrappedComponent) {
  function NewComponent(props) {
    return <WrappedComponent  {...props}/>
  }
  NewComponent.displayName = 'Brant'
  return NewComponent
}

const EnhanceComponent = enhanceComponent2(App);

export default EnhanceComponent;