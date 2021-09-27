import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import TextField from './TextField';

const initialValues = {
  nip: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const CreateForm = () => (
  <div>
    <Form className='form'>
      <TextField name='nip' autoComplete='nip' placeholder='NIP' type='number' />
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
      <button className='add-new-button rounded' type='submit'>
        Create Account
      </button>
    </Form>
  </div>
);

const validationSchema = yup.object().shape({
  nip: yup
    .number()
    .min(4, 'NIP must be more than 4 digits')
    .typeError('NIP must number')
    .required('NIP is required'),
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

const Create = () => (
  <div className='create-view'>
    <div className='create-view-main'>
      <h4>Create Account</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={
          // Not Implemented yet
          // eslint-disable-next-line no-console
          val => console.log(val)
        }
      >
        <CreateForm />
      </Formik>
    </div>
  </div>
);

export default Create;
