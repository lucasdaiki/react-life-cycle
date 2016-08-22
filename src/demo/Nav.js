import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

export default class ByeWorld extends Component {
  static propTypes = {
    selectedItem: PropTypes.string.isRequired
  };

  redirectTo(path){
    <Link to={`/users/${user.id}`} activeClassName="current">{user.name}</Link>
  }

  render() {
    const {selectedItem} = this.props;

    return (
      <div>
        <ul>
          <li>
            <Link to="HelloWorld">Hello World</Link>
          </li>
          <li>
            <Link to="ByeWorld">Bye World</Link>
          </li>
        </ul>
        <h1>{selectedItem}</h1>
      </div>
    );
  }
}
