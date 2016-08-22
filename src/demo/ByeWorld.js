import React, { Component } from 'react';
import Nav from './Nav.js';

export default class ByeWorld extends Component {
  render() {
    console.log('ByeWorld', 'render');
    return (
      <Nav selectedItem="ByeWorld" />
    );
  }
}
