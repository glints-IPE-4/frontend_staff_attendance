/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useAlert } from 'react-alert';
import ListDayOff from '../components/ListDayOff';
import RequestDayOff from '../components/RequestDayOff';
import ListOvertime from '../components/ListOvertime';
import RequestOvertime from '../components/RequestOvertime';
import AttendanceChart from '../components/AttendanceChart';
import useAuth from '../providers/auth/context';

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

const DashboardPage = () => {
  const [overtimes, setOvertime] = useState([]);
  const [reqOvertimes, setReqOvertime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingOver, setLoadingOver] = useState(false);
  const { reqHeader } = useAuth();
  const alert = useAlert();
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          'http://staffattendanceipe4.herokuapp.com/auth/api/v1/overtime',
          {
            headers: reqHeader,
          },
        );
        const over = res.data.message.filter(list => list.is_accepted !== null);
        const reqOver = res.data.message.filter(list => list.is_accepted === null);
        setOvertime(over);
        setReqOvertime(reqOver);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    if (reqHeader.Authorization !== '') fetch();
  }, [reqHeader]);

  const doReqOvertime = async () => {
    try {
      setLoadingOver(true);
      const res = await axios.post(
        'http://staffattendanceipe4.herokuapp.com/auth/api/v1/overtime',
        {
          date: moment().format('YYYY-MM-DD'),
        },
        { headers: reqHeader },
      );
      setLoadingOver(false);
      alert.show(res.data.message);
      window.location.reload();
    } catch (error) {
      alert.error(error.response.data.message);
    }
  };
  return (
    <div className='view'>
      <AttendanceChart />
      <div className='card chart'>
        <button
          type='button'
          disabled={loadingOver}
          onClick={doReqOvertime}
          className='button rounded'
        >
          {loadingOver ? 'Loading...' : 'Request Overtime'}
        </button>
      </div>
      <div className='card'>
        <div className='card-title'>List Day Off</div>
        <div className='list-staff-container'>
          {listDayOffs.map(listDayOf => (
            <ListDayOff key={listDayOf.id} name={listDayOf.name} status={listDayOf.status} />
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
          {!loading &&
            overtimes.map(listOvertime => (
              <ListOvertime
                key={`${listOvertime.idovertime}${listOvertime.name}`}
                name={listOvertime.email_staff}
                isAccepted={listOvertime.is_accepted}
                status={listOvertime.date}
                notes={listOvertime.notes}
              />
            ))}
        </div>
      </div>
      <div className='card'>
        <div className='card-title'>Overtime Request</div>
        <div className='list-staff-container'>
          {reqOvertimes.map(reqOvertime => (
            <RequestOvertime
              key={`${reqOvertime.idovertime}${reqOvertime.name}`}
              name={reqOvertime.email_staff}
              status={reqOvertime.date}
              id={reqOvertime.idovertime}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
