import React, { useState } from 'react';
import SettingWorkTime from '../components/setting/SettingWorkTime';
import SettingOvertime from '../components/setting/SettingOvertime';
import SettingDayOff from '../components/setting/SettingDayOff';
import SetOfficeLocation from '../components/setting/SetOfficeLocation';

const OfficePage = () => {
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const [dayOff, setDayOff] = useState('');

  const centering = {
    lat: -6.271301641287552,
    lng: 106.79733939731577,
  };

  return (
    <div className='office'>
      <SettingWorkTime
        showStartTime={showStartTime}
        setShowStartTime={setShowStartTime}
        showEndTime={showEndTime}
        setShowEndTime={setShowEndTime}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
      />
      <SettingOvertime
        showStartTime={showStartTime}
        setShowStartTime={setShowStartTime}
        showEndTime={showEndTime}
        setShowEndTime={setShowEndTime}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
      />
      <SettingDayOff dayOff={dayOff} setDayOff={setDayOff} />
      <SetOfficeLocation centering={centering} />
    </div>
  );
};
export default OfficePage;
