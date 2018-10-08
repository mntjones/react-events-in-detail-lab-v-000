// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  timeOut(e, delay) {
    this.props.delay = delay;
    
  }  
}