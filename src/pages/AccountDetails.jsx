import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from 'ahooks';
import StaffDetailsTable from '../components/StaffDetailsTable';
import useAuth from '../providers/auth/context';

const AccountDetails = () => {
  const { reqHeader } = useAuth();
  const [account, setAccount] = useState({
    staff_nip: '',
    email: '',
    role: '',
    is_active: '',
  });
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
  const { email } = useParams();

  const { run: getStaff, loading: loadStaff } = useRequest(
    () => ({
      url: `http://staffattendanceipe4.herokuapp.com/auth/api/v1/staff/${account.staff_nip}`,
      method: 'get',
      headers: reqHeader,
    }),
    {
      manual: true,
      onSuccess: data => {
        setStaff({ ...data.message });
      },
    },
  );
  const { run: getAccount, loading: loadAcc } = useRequest(
    () => ({
      url: `http://staffattendanceipe4.herokuapp.com/auth/api/v1/account/${email}`,
      method: 'get',
      headers: reqHeader,
    }),
    {
      manual: true,
      onSuccess: data => {
        setAccount({ ...data.message });
        getStaff();
      },
    },
  );

  useEffect(() => {
    if (reqHeader.Authorization !== '') {
      getAccount(account);
    }
  }, [reqHeader, getAccount]);

  return (
    <div className='staff-details'>
      <div className='card'>
        {loadAcc || loadStaff ? (
          'loading...'
        ) : (
          <>
            <div className='card-head'>
              <img
                src={`https://avatars.dicebear.com/api/big-ears-neutral/${email}.svg`}
                alt={email}
                className='card-head-img'
              />

              <h2 className='name'>{staff.name}</h2>
              <p className='role'> - {account.role}</p>
            </div>

            <div className='card-body'>
              <div className='data-group'>
                <div>NIP: {account.staff_nip}</div>
                <div>NIK: {staff.NIK}</div>
              </div>
              <div className='data-group'>
                <div>Division: {account.role}</div>
                <div>Phone Number: {staff.phone}</div>
              </div>
              <div className='data-group '>
                <div>Address: {staff.address}</div>
                <div>Email: {account.email}</div>
              </div>
            </div>
          </>
        )}
        <StaffDetailsTable email={account.email} />
      </div>
    </div>
  );
};

export default AccountDetails;
