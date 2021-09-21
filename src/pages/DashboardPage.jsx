import React from 'react';
import ListDayOff from '../components/ListDayOff';
import RequestDayOff from '../components/RequestDayOff';
import ListOvertime from '../components/ListOvertime';
import RequestOvertime from '../components/RequestOvertime';
import AttendanceChart from '../components/AttendanceChart';

const listDayOffs = [
  { name: 'Jake Blossom', status: 'Sakit', id: 1 },
  { name: 'Billy Agusta', status: 'Sakit', id: 2 },
  { name: 'Dany Jo', status: 'Sakit', id: 3 },
  { name: 'Afan Dayu Laksono', status: 'Sakit', id: 4 },
  { name: 'Afan Dayu Laksono', status: 'Sakit', id: 5 },
  { name: 'Afan Dayu Laksono', status: 'Sakit', id: 6 },
  { name: 'Afan Dayu Laksono', status: 'Sakit', id: 7 },
];
const requestDayOffs = [
  { name: 'Jake Blossom', status: 'Sakit', id: 1 },
  { name: 'Billy Agusta', status: 'Sakit', id: 2 },
  { name: 'Dany Jo', status: 'Sakit', id: 3 },
  { name: 'Afan Dayu Laksono', status: 'Sakit', id: 4 },
];
const listOvertimes = [
  { name: 'Jake Blossom', status: 'Masuk', id: 1 },
  { name: 'Billy Agusta', status: 'Masuk', id: 2 },
  { name: 'Dany Jo', status: 'Masuk', id: 3 },
  { name: 'Afan Dayu Laksono', status: 'Masuk', id: 4 },
];
const requestOvertimes = [
  { name: 'Jake Blossom', status: 'Masuk', id: 1 },
  { name: 'Billy Agusta', status: 'Masuk', id: 2 },
  { name: 'Dany Jo', status: 'Masuk', id: 3 },
  { name: 'Afan Dayu Laksono', status: 'Masuk', id: 4 },
];

const DashboardPage = () => (
  <div className='view'>
    <AttendanceChart />
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
