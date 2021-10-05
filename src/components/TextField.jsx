import { useField } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ name, label, placeholder, autoComplete, type, disabled }) => {
  const [field, meta] = useField(name);
  const showError = meta.touched && meta.error;
  return (
    <div className='text-field'>
      <label htmlFor={name}>{label}</label>
      {showError && <p className='error-message'>{meta.error}</p>}

      <input
        disabled={disabled}
        className='input'
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
        type={type}
      />
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
};
TextField.defaultProps = {
  autoComplete: '',
  disabled: false,
  label: '',
};
export default TextField;
