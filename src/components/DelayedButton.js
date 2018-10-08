// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  setTimeout(e, delay) {
    this.props.delay = delay;
    
  }  
}