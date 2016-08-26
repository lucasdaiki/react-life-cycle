import React, {PropTypes} from 'react';

function Input({ label, placeholder, value, type, onChange}) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input value={value} placeholder={placeholder} type={type} onChange={handleChange} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number']),
  onChange: PropTypes.func
};

Input.defaultProps = {
  placeholder: 'Type a text',
  type: 'text',
  onChange: () => {}
};

export default Input;
