import React, { Component } from 'react';
import ListPeople from './ListPeople/ListPeopleContainer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <ListPeople />
      </div>
    );
  }
}
