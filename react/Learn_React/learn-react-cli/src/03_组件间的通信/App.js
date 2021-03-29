import React, { Component } from 'react'
import PropTypes from 'prop-types'
import html2canvas from 'html2canvas';

class ChildCpn extends Component {

  render() {
    const { name, age, height, btnClick } = this.props;
    return (
      <div>
        <h2>子组件展示数据： {name + " " + age + " " + height }</h2>
        <button onClick={btnClick}>+1</button>
        {/* <h2>子组件计数： {this.state}</h2> */}
      </div>
    )
  }
}

ChildCpn.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  height: PropTypes.string
}

function FuncChildCpn (props) {
  const { name, age, height } = props;
  return (
    <h2>子组件展示数据： {name + " " + age + " " + height }</h2>
  )
}
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }
  dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);
    // console.log(byteString);
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  
    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    console.log(new Blob([ab], { type: mimeString }));
    //Old Code
    //write the ArrayBuffer to a blob, and you're done
    //var bb = new BlobBuilder();
    //bb.append(ab);
    //return bb.getBlob(mimeString);
  
    //New Code
    return new Blob([ab], { type: mimeString });
  }
  async capture () {
    const canvas = await html2canvas(document.body);
    const captureShoot = canvas.toDataURL();
    console.log(captureShoot);
    var blob = this.dataURItoBlob(captureShoot);
    console.log(blob);
    var fd = new FormData(document.forms[0]);
    fd.append("file", blob);
    console.log(fd);
  }
  render() {
    return (
      <div>
        <h2>当前计数： {this.state.counter}</h2>
        <button onClick={ e => {this.increment()}}>+</button>
        <ChildCpn name="Brant" age={18} height="18cm" btnClick={this.increment}/>
        <ChildCpn name="kobe" age={40} height="198cm" />
        <FuncChildCpn name="kobe" age={40} height="198cm" />
      </div>
    )
  }
  increment = () => {
    this.capture();
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
