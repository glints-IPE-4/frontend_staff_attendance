import React from 'react';
import { Form, Formik } from 'formik';
import TextField from './TextField';

const initialValues = {
  nip: '',
  divisi: '',
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
              <TextField name='nip' placeholder='number' />
              <TextField name='divisi' placeholder='Role' type='divisi' />
              <TextField name='name' placeholder='name' type='name' />
              <TextField
                name='Phone'
                placeholder='Phone Number'
                type='tel'
                pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
              />
              <TextField name='Address' placeholder='Address' type='Address' />
              <button className='add-staff-new' type='button' onChange={handleSubmit}>
                Submit
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  </div>
);

export default AddStaff;
