import React, { Component, PropTypes } from 'react';

export default class Main extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div>
        <h1>Main</h1>
        {this.props.children}
      </div>
    );
  }
}
