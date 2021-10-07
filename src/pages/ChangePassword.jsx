import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useAlert } from 'react-alert';
import axios from 'axios';
import useAuth from '../providers/auth/context';
import TextField from '../components/TextField';

const validationSchema = yup.object().shape({
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
const initialValues = {
  oldpassword: '',
  password: '',
  confirmPassword: '',
};
const ChangePassword = () => {
  const [loading, setloading] = useState(false);
  const alert = useAlert();
  const { reqHeader } = useAuth();
  const onSubmit = async val => {
    try {
      setloading(true);
      const res = await axios.put(
        'http://staffattendanceipe4.herokuapp.com/auth/api/v1/changepassword',
        {
          oldpassword: val.oldpassword,
          newpassword: val.password,
        },
        {
          headers: reqHeader,
        },
      );
      setloading(false);
      alert.info(res.data.message);
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
          onSubmit={val => {
            onSubmit(val);
          }}
        >
          <Form className='form'>
            <TextField
              name='oldpassword'
              autoComplete='new-password'
              placeholder='Old Password'
              type='password'
            />
            <TextField
              name='password'
              autoComplete='new-password'
              placeholder='New Password'
              type='password'
            />
            <TextField
              name='confirmPassword'
              autoComplete='new-password'
              placeholder='Confirm New Password'
              type='password'
            />
            <button disabled={loading} className='add-new-button rounded' type='submit'>
              {loading ? 'Loading...' : 'Change Password'}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ChangePassword;
