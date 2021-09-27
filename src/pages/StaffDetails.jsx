import React from 'react';
import { useParams } from 'react-router-dom';
import StaffDetailsTable from '../components/StaffDetailsTable';

const data = {
  address: 'P.O. Box 452, 9967 Mi St.',
  email: 'at.egestas.a@tellussuspendissesed.net',
  phone: '(361) 654-7552',
  name: 'Zeph Velasquez',
  nik: 5855,
};
const StaffDetails = () => {
  const { id } = useParams();

  return (
    <div className='staff-details'>
      <div className='card'>
        <div className='card-head'>
          <img
            src={`https://avatars.dicebear.com/api/big-ears-neutral/${id}.svg`}
            alt={id}
            className='card-head-img'
          />
          <h2 className='name'>{data.name}</h2>
          <p className='role'> - Admin</p>
        </div>
        <div className='card-body'>
          <div className='data-group'>
            <div>NIP: {id}</div>
            <div>NIK: {data.nik}</div>
          </div>
          <div className='data-group'>
            <div>Division: Admin</div>
            <div>Phone Number: {data.phone}</div>
          </div>
          <div className='data-group '>
            <div>Address: {data.address}</div>
            <div>Email: {data.email}</div>
          </div>
        </div>
        <StaffDetailsTable />
      </div>
    </div>
  );
};

export default StaffDetails;
