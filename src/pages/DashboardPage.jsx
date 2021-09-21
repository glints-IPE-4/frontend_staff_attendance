import React from 'react';
import ListDayOff from '../components/ListDayOff';
import RequestDayOff from '../components/RequestDayOff';
import ListOvertime from '../components/ListOvertime';
import RequestOvertime from '../components/RequestOvertime';

const listDayOffs = [
  { name: 'Jake Blossom', status: 'Sakit' },
  { name: 'Billy Agusta', status: 'Sakit' },
  { name: 'Dany Jo', status: 'Sakit' },
  { name: 'Afan Dayu Laksono', status: 'Sakit' },
  { name: 'Afan Dayu Laksono', status: 'Sakit' },
  { name: 'Afan Dayu Laksono', status: 'Sakit' },
  { name: 'Afan Dayu Laksono', status: 'Sakit' },
];
const requestDayOffs = [
  { name: 'Jake Blossom', status: 'Sakit' },
  { name: 'Billy Agusta', status: 'Sakit' },
  { name: 'Dany Jo', status: 'Sakit' },
  { name: 'Afan Dayu Laksono', status: 'Sakit' },
];
const listOvertimes = [
  { name: 'Jake Blossom', status: 'masuk' },
  { name: 'Daddy Sugar', status: 'masuk' },
  { name: 'Dany Jo', status: 'masuk' },
  { name: 'Afan Dayu Laksono', status: 'masuk' },
];
const requestOvertimes = [
  { name: 'Jake Blossom', status: 'masuk' },
  { name: 'Daddy Sugar', status: 'masuk' },
  { name: 'Dany Jo', status: 'masuk' },
  { name: 'Afan Dayu Laksono', status: 'masuk' },
];

const DashboardPage = () => (
  <div className='view'>
    <div className='card'>
      <div className='card-title'>List Day Off</div>
      <div className='list-staff-container'>
        {listDayOffs.map(listDayOff => (
          <ListDayOff key={listDayOff.id} name={listDayOff.name} status={listDayOff.status} />
        ))}
      </div>
    </div>
    <div className='card'>
      <div className='card-title'>Day Off Request</div>
      <div className='list-staff-container'>
        {requestDayOffs.map(requestDayOff => (
          <RequestDayOff
            key={requestDayOff.id}
            name={requestDayOff.name}
            status={requestDayOff.status}
          />
        ))}
      </div>
    </div>
    <div className='card'>
      <div className='card-title'>List Overtime</div>
      <div className='list-staff-container'>
        {listOvertimes.map(listOvertime => (
          <ListOvertime
            key={listOvertime.id}
            name={listOvertime.name}
            status={listOvertime.status}
          />
        ))}
      </div>
    </div>
    <div className='card'>
      <div className='card-title'>Overtime Request</div>
      <div className='list-staff-container'>
        {requestOvertimes.map(requestOvertime => (
          <RequestOvertime
            key={requestOvertime.id}
            name={requestOvertime.name}
            status={requestOvertime.status}
          />
        ))}
      </div>
    </div>
  </div>
);

export default DashboardPage;
