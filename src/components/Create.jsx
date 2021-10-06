import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from 'react-alert';
import PropTypes from 'prop-types';
import TextField from './TextField';
import useAuth from '../providers/auth/context';
import DropDownField from './DropDownField';

const CreateForm = ({ loading }) => (
  <div>
    <Form className='form'>
      <TextField name='nip' autoComplete='nip' placeholder='NIP' type='number' disabled />
      <TextField name='email' autoComplete='username' placeholder='Example@mail.co' type='email' />
      <TextField
        name='password'
        autoComplete='new-password'
        placeholder='password'
        type='password'
      />
      <TextField
        name='confirmPassword'
        autoComplete='new-password'
        placeholder='Confirm Password'
        type='password'
      />
      <DropDownField name='role'>
        <option value='staff'>Staff</option>
        <option value='hr'>HR</option>
        <option value='admin'>Admin</option>
      </DropDownField>
      <button disabled={loading} className='add-new-button rounded' type='submit'>
        {loading ? 'Loading...' : 'Create Account'}
      </button>
    </Form>
  </div>
);
CreateForm.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const validationSchema = yup.object().shape({
  nip: yup.string().required('NIP is required'),
  email: yup.string().email('must a valid email').required('Email is Required'),
  password: yup
    .string()
    .min(8)
    .max(16)
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'password must contains 8 characters,1 uppercase, 1 lowercase, 1 number, and 1 special char',
    )
    .required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Create = () => {
  const [loading, setloading] = useState(false);
  const alert = useAlert();
  const { reqHeader } = useAuth();
  const history = useHistory();
  const { nip } = useParams();
  const initialValues = {
    nip,
    email: '',
    role: 'staff',
    password: '',
    confirmPassword: '',
  };
  const onSubmit = async val => {
    try {
      setloading(true);
      const res = await axios.post(
        'http://staffattendanceipe4.herokuapp.com/auth/api/v1/account',
        {
          email: val.email,
          nip: val.nip,
          password: val.password,
          role: val.role,
        },
        {
          headers: reqHeader,
        },
      );
      setloading(false);
      alert.error(res.data.message);
      history.push('/account');
    } catch (error) {
      setloading(false);
      alert.error(error.response.data.message);
    }
  };

  return (
    <div className='create-view'>
      <div className='create-view-main'>
        <h4>Create Account</h4>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={val => onSubmit(val)}
        >
          <CreateForm loading={loading} />
        </Formik>
      </div>
    </div>
  );
};

export default Create;
