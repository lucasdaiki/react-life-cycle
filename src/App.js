import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import HelloWorld from './demo/HelloWorld';
import ByeWorld from './demo/ByeWorld';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <Route path="HelloWorld" component={HelloWorld} />
          <Route path="ByeWorld" component={ByeWorld} />
        </Route>
      </Router>
    );
  }
}
