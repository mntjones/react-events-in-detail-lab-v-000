// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  clickEvent () {
    
  }
  
  render() {
    return <button onClick={onDelayedClick}>Delay</button>
  }
}

setTimeout(function(){ alert("Hello"); }, 3000);