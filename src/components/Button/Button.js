import React, {PropTypes} from 'react';

function Input({ onClick, children}) {
  return (
    <div onClick={onClick}>
      {children}
    </div>
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
