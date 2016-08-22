import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

export default class ByeWorld extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: props.count
    }
  }

  static propTypes = {
    selectedItem: PropTypes.string.isRequired,
    count: PropTypes.number
  };

  static defaultProps = {
    count: 0
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.count !== undefined && nextProps.count % 2)
      this.setState({count: nextProps.count});
  }

  render() {
    const {selectedItem} = this.props;
    const {count} = this.state;

    return (
      <div>
        <h1>{selectedItem}</h1>
        <h2>Counter: {count}</h2>
        <ul>
          <li>
            <Link to="HelloWorld">Hello World</Link>
          </li>
          <li>
            <Link to="ByeWorld">Bye World</Link>
          </li>
        </ul>
      </div>
    );
  }
}
