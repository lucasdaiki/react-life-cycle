import React, { Component } from 'react';
import Nav from './Nav.js';

export default class HelloWorld extends Component {
  componentWillMount() {
    console.log('HelloWorld', 'componentWillMount');
  }

  componentDidMount() {
    console.log('HelloWorld', 'componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('HelloWorld', 'componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('HelloWorld', 'shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('HelloWorld', 'componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('HelloWorld', 'componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('HelloWorld', 'componentWillUnmount');
  }

  render() {
    console.log('HelloWorld', 'render');
    return (
      <Nav selectedItem="HelloWorld" />
    );
  }
}
