import React from 'react';
import { browserHistory } from 'react-router';

export default function NavBar() {
  const redirectTo = (path) => {
    browserHistory.push(path);
  }

  return(
    <ul>
      <li onClick={() => redirectTo('home')}>Home</li>
      <li onClick={() => redirectTo('demo')}>Demo</li>
    </ul>
  )
}
