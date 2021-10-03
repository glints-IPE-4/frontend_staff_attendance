import React, { useState } from 'react';
import moment from 'moment';
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
        placeholder='Select Clock in'
        onChange={onChangeStart}
        defaultValue={moment('08:00', format)}
        value={startWork}
        format={format}
      />
      <TimePicker
        placeholder='Select Clock Out'
        onChange={onChangeEnd}
        defaultValue={moment('17:00', format)}
        value={endWork}
        format={format}
      />
    </div>
  );
};

export default SettingWorkTime;
