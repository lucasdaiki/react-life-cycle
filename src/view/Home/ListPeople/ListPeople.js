import React, {PropTypes} from 'react';

function renderPerson(person, index){
  return (
    <tr key={index}>
      <td>{person.name}</td>
      <td>{person.age}</td>
    </tr>
  )
};

function ListPeople({people}){
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {people.map(renderPerson)}
      </tbody>
    </table>
  );
}

ListPeople.propTypes = {
  people: PropTypes.array
}

ListPeople.defaultProps = {
  people: []
}

export default ListPeople;
