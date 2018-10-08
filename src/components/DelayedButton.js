// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  onDelayedClick(e, delay) {
    this.props.delay = delay;
    
  }  
  
  render() {
    return <button onClick={onDelayedClick}>Delay</button>
  }
}