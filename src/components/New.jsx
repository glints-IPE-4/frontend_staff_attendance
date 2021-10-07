import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextField from './TextField';
import DropDownField from './DropDownField';
import useAuth from '../providers/auth/context';

const New = ({ edit }) => {
  const [options, setoptions] = useState([]);
  const [loadingDiv, setloadingDiv] = useState(false);
  const [loadingData, setloadingData] = useState(false);
  const [loading, setloading] = useState(false);
  const alert = useAlert();
  const history = useHistory();
  const { reqHeader } = useAuth();
  const { id } = useParams();
  const [initial, setInitial] = useState({
    nip: '',
    nik: '',
    iddivision: '',
    name: '',
    phone: '',
    address: '',
  });
  useEffect(() => {
    const fetch = async () => {
      if (reqHeader.Authorization !== '') {
        setloadingDiv(true);
        if (edit) {
          setloadingData(true);
          // eslint-disable-next-line no-unused-vars
          const res2 = await axios.get(
            `http://staffattendanceipe4.herokuapp.com/auth/api/v1/staff/${id}`,
            {
              headers: reqHeader,
            },
          );
          setInitial({
            nip: res2.data.message.NIP,
            nik: res2.data.message.NIK,
            iddivision: res2.data.message.iddivision,
            name: res2.data.message.name,
            phone: res2.data.message.phone,
            address: res2.data.message.address,
          });
          setloadingData(false);
        }
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
      await axios({
        url: `http://staffattendanceipe4.herokuapp.com/auth/api/v1/staff${edit ? `/${id}` : ''}`,
        headers: reqHeader,
        method: `${edit ? 'PUT' : 'POST'}`,
        data: { ...val },
      });

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
        <h4>{edit ? 'Edit' : 'Add New'} Staff</h4>
        {loadingData ? (
          'Loading...'
        ) : (
          <Formik initialValues={initial} onSubmit={val => onSubmit(val)}>
            {({ handleSubmit }) => (
              <div>
                <Form className='form'>
                  <TextField name='nip' disabled={edit} placeholder='NIP' type='text' />
                  <TextField name='nik' placeholder='NIK' type='text' />
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
        )}
      </div>
    </div>
  );
};
New.propTypes = {
  edit: PropTypes.bool,
};
New.defaultProps = {
  edit: false,
};
export default New;
