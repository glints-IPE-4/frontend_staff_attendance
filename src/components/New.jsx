import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';
import TextField from './TextField';
import DropDownField from './DropDownField';
import useAuth from '../providers/auth/context';

const initialValues = {
  nip: '',
  nik: '',
  iddivision: '',
  name: '',
  phone: '',
  address: '',
};
const New = () => {
  const [options, setoptions] = useState([]);
  const [loadingDiv, setloadingDiv] = useState(false);
  const [loading, setloading] = useState(false);
  const alert = useAlert();
  const history = useHistory();
  const { reqHeader } = useAuth();
  useEffect(() => {
    const fetch = async () => {
      if (reqHeader.Authorization !== '') {
        setloadingDiv(true);
        const res = await axios.get(
          'http://staffattendanceipe4.herokuapp.com/auth/api/v1/division',
          {
            headers: reqHeader,
          },
        );
        setoptions(res.data.message);

        setloadingDiv(false);
      }
    };
    fetch();
  }, [reqHeader]);
  const onSubmit = async val => {
    try {
      setloading(true);
      await axios.post(
        'http://staffattendanceipe4.herokuapp.com/auth/api/v1/staff',
        {
          ...val,
        },
        {
          headers: reqHeader,
        },
      );
      setloading(false);
      history.push('/staff');
    } catch (error) {
      setloading(false);

      alert.error(error.response.data.message);
    }
  };
  return (
    <div className='add-staff'>
      <div className='add-staff-main'>
        <h4>Add New Staff</h4>
        <Formik initialValues={initialValues} onSubmit={val => onSubmit(val)}>
          {({ handleSubmit }) => (
            <div>
              <Form className='form'>
                <TextField name='nip' placeholder='NIP' type='text' />
                <TextField name='nik' placeholder='NIK' type='text' />
                {/* <TextField name='divisi' placeholder='Division' type='name' /> */}
                <DropDownField name='iddivision'>
                  <>
                    {loadingDiv ? (
                      <option>LoadingDiv...</option>
                    ) : (
                      options.map(optione => (
                        <option value={optione.iddivision} key={optione.iddivision}>
                          {optione.name}
                        </option>
                      ))
                    )}
                  </>
                </DropDownField>

                <TextField name='name' placeholder='name' type='name' />
                <TextField
                  name='phone'
                  placeholder='Phone Number'
                  type='tel'
                  pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                />
                <TextField name='address' placeholder='Address' type='address' />
                <button
                  className='add-new-button'
                  disabled={loading}
                  type='button'
                  onClick={handleSubmit}
                >
                  {loading ? 'Loading...' : 'Create'}
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default New;
