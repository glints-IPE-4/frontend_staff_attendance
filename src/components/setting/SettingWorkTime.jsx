import React, { useState } from 'react';
import { TimePicker } from 'antd';

const SettingWorkTime = () => {
  const [startWork, setStartWork] = useState();
  const onChangeStart = time => {
    setStartWork(time);
  };
  const [endWork, setEndWork] = useState();
  const onChangeEnd = time => {
    setEndWork(time);
  };
  const format = 'HH:mm';
  return (
    <div className='card'>
      <div className='card-title'>Setting Office Time</div>
      <TimePicker
        placeholder='Select a time clock in'
        onChange={onChangeStart}
        value={startWork}
        format={format}
      />
      <TimePicker
        placeholder='Select a time Clock Out'
        onChange={onChangeEnd}
        value={endWork}
        format={format}
      />
    </div>
  );
};

export default SettingWorkTime;
