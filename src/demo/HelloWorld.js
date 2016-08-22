import React, { Component } from 'react';
import Nav from './Nav.js';

export default class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.state = {count: -1};
  }

  componentWillMount() {
    console.log('HelloWorld', '(0) componentWillMount');
  }

  componentDidMount() {
    console.log('HelloWorld', '(2) componentDidMount');
    window.addEventListener('click', this.incrementCount);
  }

  componentWillUnmount() {
    console.log('HelloWorld', '(last) componentWillUnmount');
    window.removeEventListener('click', this.incrementCount);
  }

  incrementCount = () => {
    const {count} = this.state;
    this.setState({count: count + 1});
  }

  render() {
    console.log('HelloWorld', '(1) render');
    console.log(this.state.count);
    return (
      <Nav selectedItem="HelloWorld" count={this.state.count} />
    );
  }
}
