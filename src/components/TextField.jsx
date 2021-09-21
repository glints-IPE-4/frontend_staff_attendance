import { useField } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ name, label, placeholder, autoComplete }) => {
  const [field, meta] = useField(name);
  const showError = meta.touched && meta.error;
  return (
    <div className='text-field'>
      <label htmlFor={name}>{label}</label>
      {showError && <p className='error-message'>{meta.error}</p>}

      <input
        className='input'
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
      />
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
};
TextField.defaultProps = {
  autoComplete: '',
};
export default TextField;
