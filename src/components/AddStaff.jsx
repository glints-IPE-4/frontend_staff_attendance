import React from 'react';
import { Form, Formik } from 'formik';
import TextField from './TextField';

const initialValues = {
  nip: '',
  division: '',
  name: '',
  Phone: '',
  Address: '',
};
const AddStaff = () => (
  <div className='add-staff'>
    <div className='add-staff-main'>
      <h4>Add New Staff</h4>
      <Formik
        initialValues={initialValues}
        onSubmit={
          // Not Implemented yet
          // eslint-disable-next-line no-console
          val => console.log(val)
        }
      >
        {({ handleSubmit }) => (
          <div>
            <Form className='form'>
              <TextField name='nip' placeholder='NIP' />
              <TextField name='division' placeholder='Role' type='division' />
              <TextField name='name' placeholder='name' type='name' />
              <TextField name='Phone Number' placeholder='Phone Number' x type='Phone Number' />
              <TextField name='Address' placeholder='Address' type='Address' />
              <TextField
                name='email'
                placeholder='example@web.com'
                autoComplete='username'
                type='email'
              />
              <button type='submit' onClick={handleSubmit}>
                submit
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  </div>
);

export default AddStaff;
