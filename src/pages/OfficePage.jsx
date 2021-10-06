import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';
import SettingWorkTime from '../components/setting/SettingWorkTime';
import SettingOvertime from '../components/setting/SettingOvertime';
import SettingDayOff from '../components/setting/SettingDayOff';
import SetOfficeLocation from '../components/setting/SetOfficeLocation';
import useAuth from '../providers/auth/context';

const center = {
  lat: -6.271301641287552,
  lng: 106.79733939731577,
};

const OfficePage = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const [startOvertime, setStartOvertime] = useState('');
  const [endOvertime, setEndOvertime] = useState('');

  const [lateTime, setLateTime] = useState('');
  const [dayOff, setDayOff] = useState('');

  const [position, setPosition] = useState(center);
  const [loading, setloading] = useState(false);
  const alert = useAlert();
  const history = useHistory();
  const { reqHeader } = useAuth();

  const submit = async () => {
    try {
      setloading(true);
      await axios.put(
        'http://staffattendanceipe4.herokuapp.com/auth/api/v1/config',
        {
          start_working: `${startTime.formatted24}:00`,
          finish_working: `${endTime.formatted24}:00`,
          max_late: lateTime.formatted24,
          start_overtime: `${startOvertime.formatted24}:00`,
          finish_overtime: `${endOvertime.formatted24}:00`,
          max_dayoff: dayOff,
          latitude: position.lat,
          longitude: position.lng,
        },
        {
          headers: reqHeader,
        },
      );

      setloading(false);
      history.push('/office');
    } catch (error) {
      alert.error(error.response.data.message);
    }
  };
  useEffect(() => {
    if (reqHeader.Authorization !== '') {
      const fetchSetting = async () => {
        try {
          setloading(true);
          const res = await axios.get(
            'http://staffattendanceipe4.herokuapp.com/auth/api/v1/config',
            {
              headers: reqHeader,
            },
          );
          setStartTime({
            formatted24: res.data.message.start_working.slice(0, 5),
          });
          setEndTime({ formatted24: res.data.message.finish_working.slice(0, 5) });
          setStartOvertime({ formatted24: res.data.message.start_overtime.slice(0, 5) });
          setEndOvertime({ formatted24: res.data.message.finish_overtime.slice(0, 5) });
          setDayOff(res.data.message.max_dayoff);
          setLateTime({ formatted12: res.data.message.max_late.slice(0, 5) });
          setPosition({ lat: res.data.message.latitude, lng: res.data.message.longitude });
          setloading(false);
        } catch (error) {
          setloading(false);
        }
      };
      fetchSetting();
    }
  }, [reqHeader]);

  return (
    <div className='office'>
      <SettingWorkTime
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
      />
      <SettingOvertime
        startOvertime={startOvertime}
        setStartOvertime={setStartOvertime}
        endOvertime={endOvertime}
        setEndOvertime={setEndOvertime}
      />
      <SettingDayOff
        dayOff={dayOff}
        setDayOff={setDayOff}
        lateTime={lateTime}
        setLateTime={setLateTime}
      />
      <SetOfficeLocation center={center} position={position} setPosition={setPosition} />
      <button disabled={loading} className=' button-save' type='button' onClick={submit}>
        {loading ? 'Loading...' : 'save'}
      </button>
    </div>
  );
};
export default OfficePage;
