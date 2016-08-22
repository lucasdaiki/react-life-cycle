import React, { Component } from 'react';
import Nav from './Nav.js';

export default class ByeWorld extends Component {
  componentWillMount() {
    console.log('ByeWorld', 'componentWillMount');
  }

  componentDidMount() {
    console.log('ByeWorld', 'componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('ByeWorld', 'componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('ByeWorld', 'shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('ByeWorld', 'componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('ByeWorld', 'componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('ByeWorld', 'componentWillUnmount');
  }

  render() {
    console.log('ByeWorld', 'render');
    return (
      <Nav selectedItem="ByeWorld" />
    );
  }
}
