import React, {Component, PropTypes} from 'react';

export default class ListPeople extends Component {
  static propTypes = {
    people: PropTypes.array
  };

  static defaultProps = {
    people: []
  };

  constructor(props){
    super(props);
    this.state = {
      people: props.people
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.people !== this.state.people) this.setState({people: nextProps.people});
  }

  shouldComponentUpdate(nextProps){
    return nextProps.people.length < 10;
  }

  render(){
    console.log(this.state);
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {this.state.people.map(renderPerson)}
        </tbody>
      </table>
    );
  }
}

function renderPerson(person, index){
  return (
    <tr key={index}>
      <td>{person.name}</td>
      <td>{person.age}</td>
    </tr>
  )
};
