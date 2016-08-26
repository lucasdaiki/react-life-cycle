import React, { Component, PropTypes } from 'react';
import NavBar from '../../components/NavBar/NavBar.js';

export default class Main extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}
