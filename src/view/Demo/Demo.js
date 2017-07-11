import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import PersonRepository from '../../repository/PersonRepository';

import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';

export default class Demo extends Component {
  constructor(props){
    super(props);
    this.form = {};
  }

  componentWillUnmount(){
    alert('bye!');
  }

  save = () => {
    PersonRepository.create(this.form);
    browserHistory.push('/home');
  }

  handleInputChange = (field) => (value) => this.form[field] = value

  render() {
    return (
      <div>
        <Input label="Name" onChange={this.handleInputChange('name')} />
        <Input label="Age" type="number" onChange={this.handleInputChange('age')} />
        <Button onClick={this.save}>Save it!</Button>
      </div>
    );
  }
}
