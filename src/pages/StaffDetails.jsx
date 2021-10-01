import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from 'ahooks';
import useAuth from '../providers/auth/context';

const StaffDetails = () => {
  const { reqHeader } = useAuth();
  const [staff, setStaff] = useState({
    NIP: '',
    iddivision: '',
    name: '',
    phone: '',
    address: '',
    photo: '',
    NIK: '',
    is_deleted: '',
  });

  const { id } = useParams();
  const {
    data: dataUser,
    run: getStaff,
    loading,
  } = useRequest(
    () => ({
      url: `http://staffattendanceipe4.herokuapp.com/auth/api/v1/staff/${id}`,
      method: 'get',
      headers: reqHeader,
    }),
    { manual: true },
  );
  useEffect(() => {
    if (reqHeader.Authorization !== '') {
      getStaff();
    }
  }, [reqHeader, getStaff]);
  useEffect(() => {
    if (dataUser) {
      setStaff({ ...dataUser.message });
    }
  }, [dataUser]);
  return (
    <div className='staff-details'>
      <div className='card'>
        {loading ? (
          'Loading...'
        ) : (
          <>
            <div className='card-head'>
              <img
                src={`https://avatars.dicebear.com/api/big-ears-neutral/${id}.svg`}
                alt={id}
                className='card-head-img'
              />
              <h2 className='name'>{staff.name}</h2>
              <p className='role' />
            </div>
            <div className='card-body'>
              <div className='data-group'>
                <div>NIP: {staff.NIP}</div>
                <div>NIK: {staff.NIK}</div>
              </div>
              <div className='data-group'>
                <div>Division: Admin</div>
                <div>Phone Number: {staff.phone}</div>
              </div>
              <div className='data-group '>
                <div>Address: {staff.address}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StaffDetails;
