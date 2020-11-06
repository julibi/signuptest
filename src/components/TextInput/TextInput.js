import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

const TextInput = ({label, handleChange, value, errorMessage, className}) => {
  const isPassword = (text) => {
    if (text.includes('Password')) {
      return true;
    }
    return false;
  };
  return(
    <>
    <label className="label">{label}</label>
    <input
      type={isPassword(label) ? "password" : "text"}
      value={value}
      onChange={(event) => handleChange(event.target.value)}
      className="textInput"
    />
    <p className="errorMessage">{errorMessage}</p>
    </>
  );
};

export default TextInput;

TextInput.propTypes = {
  label: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string
};

