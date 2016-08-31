import React, {PropTypes} from 'react';

function Input({ onClick, children}) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

Input.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

Input.defaultProps = {
  onClick: () => {}
};

export default Input;
