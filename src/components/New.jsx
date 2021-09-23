import React from 'react';
import { Form, Formik } from 'formik';
import TextField from './TextField';

const initialValues = {
  nip: '',
  nik: '',
  divisi: '',
  name: '',
  phone: '',
  address: '',
};
const New = () => (
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
              <TextField name='nip' placeholder='NIP' type='number' />
              <TextField name='nik' placeholder='NIK' type='number' />
              <TextField name='divisi' placeholder='Division' type='name' />
              <TextField name='name' placeholder='name' type='name' />
              <TextField
                name='Phone'
                placeholder='Phone Number'
                type='tel'
                pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
              />
              <TextField name='Address' placeholder='Address' type='address' />
              <button className='add-new-button' type='button' onChange={handleSubmit}>
                Create
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  </div>
);

export default New;
