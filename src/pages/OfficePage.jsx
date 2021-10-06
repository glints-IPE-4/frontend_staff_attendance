import React, { useState } from 'react';
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

  const alert = useAlert();
  const history = useHistory();
  const { reqHeader } = useAuth();

  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  const submit = async () => {
    try {
      await axios.put(
        'http://staffattendanceipe4.herokuapp.com/auth/api/v1/config',
        {
          start_working: `${startTime.formatted24}:00`,
          finish_working: `${endTime.formatted24}:00`,
          max_late: lateTime.formatted24,
          start_overtime: `${startOvertime.formatted24}:00`,
          finish_overtime: `${endOvertime.formatted24}:00`,
          max_dayoff: dayOff,
          latitude: center.lat,
          longitude: center.lng,
        },
        {
          headers: reqHeader,
        },
      );
      history.push('/office');
    } catch (error) {
      alert.error(error.response.data.message);
    }
  };

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
      <button className=' button-save' type='button' onClick={submit}>
        Save
      </button>
    </div>
  );
};
export default OfficePage;
