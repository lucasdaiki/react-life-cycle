import React, { Component } from 'react';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';

export default class Demo extends Component {
  constructor(props){
    super(props);
    this.form = {};
  }

  save = () => {
    console.log(this);
  }

  handleInputChange = (field, value) => {
    this.form[field] = value;
  }

  render() {
    return (
      <div>
        <Input label="Name" onChange={this.handleInputChange.bind(this, 'name')} />
        <Input label="Age" type="number" onChange={this.handleInputChange.bind(this, 'age')} />
        <Button onClick={this.save}>Save it!</Button>
      </div>
    );
  }
}
