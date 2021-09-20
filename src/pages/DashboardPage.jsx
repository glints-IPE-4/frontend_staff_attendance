import React from 'react';
import ListStaff from '../components/ListStaff';
import RequestStaff from '../components/RequestStaff';

const listStaffs = [
  { name: 'Jake Blossom', status: 'Sakit' },
  { name: 'Billy Agusta', status: 'Sakit' },
  { name: 'Dany Jo', status: 'Sakit' },
  { name: 'Afan Dayu Laksono', status: 'Sakit' },
];
const requestStaffs = [
  { name: 'Jake Blossom', status: 'Sakit' },
  { name: 'Daddy Sugar', status: 'Sakit' },
  { name: 'Dany Jo', status: 'Sakit' },
  { name: 'Afan Dayu Laksono', status: 'Sakit' },
];

const DashboardPage = () => (
  <div className='staff-view'>
    <div className='card'>
      <div className='card-title'>List Day Off</div>
      {listStaffs.map(listStaff => (
        <ListStaff key={listStaff.id} name={listStaff.name} status={listStaff.status} />
      ))}
    </div>
    <div className='card'>
      <div className='card-title'>Day Off Request</div>
      {requestStaffs.map(requestStaff => (
        <RequestStaff key={requestStaff.id} name={requestStaff.name} status={requestStaff.status} />
      ))}
    </div>
    <div className='card'>
      <div className='card-title'>List Overtime</div>
      {listStaffs.map(listStaff => (
        <ListStaff key={listStaff.id} name={listStaff.name} status={listStaff.status} />
      ))}
    </div>
    <div className='card'>
      <div className='card-title'>Overtime Request</div>
      {requestStaffs.map(requestStaff => (
        <RequestStaff key={requestStaff.id} name={requestStaff.name} status={requestStaff.status} />
      ))}
    </div>
  </div>
);

export default DashboardPage;
