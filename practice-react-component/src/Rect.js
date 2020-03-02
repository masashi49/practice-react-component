import React, { Component } from 'react';

class Rect extends Component {
  constructor( props ) {
    super( props )
    this.fontSize = props.fontSize
    this.style = {
      fontSize: this.fontSize + 'px'
    }
  }

  render () {
    return <div style={ this.style }>{ this.fontSize }pxの文字です</div>
  }
}

export default Rect;
