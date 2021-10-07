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
import RequestDayOffButton from '../components/RequestDayOffButton';
import StaffDetailsTable from '../components/StaffDetailsTable';

const DashboardPage = () => {
  const [overtimes, setOvertime] = useState([]);
  const [reqOvertimes, setReqOvertime] = useState([]);
  const [dayoff, setDayoff] = useState([]);
  const [reqDayoff, setReqDayoff] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingOver, setLoadingOver] = useState(false);
  const { reqHeader, auth } = useAuth();
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
        const res2 = await axios.get(
          'http://staffattendanceipe4.herokuapp.com/auth/api/v1/dayoff',
          {
            headers: reqHeader,
          },
        );
        const over = res.data.message.filter(list => list.is_accepted !== null);
        const reqOver = res.data.message.filter(list => list.is_accepted === null);
        const off = res2.data.message.filter(list => list.is_accepted !== null);
        const reqOff = res2.data.message.filter(list => list.is_accepted === null);
        setOvertime(over);
        setReqOvertime(reqOver);
        setDayoff(off);
        setReqDayoff(reqOff);
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
      setLoadingOver(false);
    }
  };
  const authorize = () => auth.role === 'hr' || auth.role === 'admin';
  return (
    <div className='view'>
      {authorize() && <AttendanceChart />}

      <div className='card chart'>
        <div>
          <button
            type='button'
            disabled={loadingOver}
            onClick={doReqOvertime}
            className='button rounded'
            style={{ marginRight: 24 }}
          >
            {loadingOver ? 'Loading...' : 'Request Overtime'}
          </button>
          <RequestDayOffButton />
        </div>
        {!authorize() && (
          <div style={{ marginTop: 24 }}>
            <StaffDetailsTable email={auth.email} />
          </div>
        )}
      </div>
      {authorize() && (
        <>
          <div className='card'>
            <div className='card-title'>List Day Off</div>
            <div className='list-staff-container'>
              {dayoff.map(listDayOf => (
                <ListDayOff
                  key={listDayOf.iddayoff}
                  name={listDayOf.email_staff}
                  status={listDayOf.description}
                  isAccepted={listDayOf.is_accepted}
                  date={listDayOf.date}
                  proof={listDayOf.proof}
                  notes={listDayOf.notes}
                />
              ))}
            </div>
          </div>
          <div className='card'>
            <div className='card-title'>Day Off Request</div>
            <div className='list-staff-container'>
              {reqDayoff.map(requestDayOff => (
                <RequestDayOff
                  key={requestDayOff.iddayoff}
                  name={requestDayOff.email_staff}
                  status={requestDayOff.description}
                  date={requestDayOff.date}
                  proof={requestDayOff.proof}
                  id={requestDayOff.iddayoff}
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
        </>
      )}
    </div>
  );
};

export default DashboardPage;
