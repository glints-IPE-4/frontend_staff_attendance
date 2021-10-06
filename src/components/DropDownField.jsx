import { useField } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

const DropDownField = ({ name, children }) => {
  const [field, meta] = useField(name);
  const showError = meta.touched && meta.error;
  return (
    <div className='dropdown-field'>
      {showError && <p className='error-message'>{meta.error}</p>}
      <select className='select' onChange={field.onChange} onBlur={field.onBlur} name={field.name}>
        {children}
      </select>
    </div>
  );
};
DropDownField.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
export default DropDownField;
