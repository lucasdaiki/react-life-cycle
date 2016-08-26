import React, {PropTypes} from 'react';

function Input(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input value={props.value} placeholder={props.placeholder }/>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  placeholder: 'Type a text'
};

export default Input;
