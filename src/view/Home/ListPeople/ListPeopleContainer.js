import React, { Component } from 'react';

import PersonRepository from '../../../repository/PersonRepository';
import ListPeople from './ListPeople';

export default class ListPeopleContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount(){
    PersonRepository.list().then(items => this.setState({ items }));
  }

  render(){
    return(
      <ListPeople people={this.state.items} />
    )
  }
}
