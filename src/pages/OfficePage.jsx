import React, { useState } from 'react';
import SettingWorkTime from '../components/setting/SettingWorkTime';
import SettingOvertime from '../components/setting/SettingOvertime';
import SettingDayOff from '../components/setting/SettingDayOff';
import SetOfficeLocation from '../components/setting/SetOfficeLocation';

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
      <button className=' button-save' type='button'>
        Save
      </button>
    </div>
  );
};
export default OfficePage;
