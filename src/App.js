import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import HelloWorld from './HelloWorld';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={HelloWorld}>
          <Route path="HelloWorld" component={HelloWorld}/>
        </Route>
      </Router>
    );
  }
}
