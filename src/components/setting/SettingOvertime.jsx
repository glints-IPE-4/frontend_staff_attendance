import React, { useState } from 'react';
import { TimePicker } from 'antd';

function SettingOvertime() {
  const [startOvertime, setStartOvertime] = useState();
  const onChangeStart = time => {
    setStartOvertime(time);
  };
  const [endOvertime, setEndOvertime] = useState();
  const onChangeEnd = time => {
    setEndOvertime(time);
  };
  const format = 'HH:mm';
  return (
    <div className='card'>
      <div className='card-title'>setting Overtime</div>
      <TimePicker
        placeholder='Select a time Clock in'
        onChange={onChangeStart}
        value={startOvertime}
        format={format}
      />
      <TimePicker
        placeholder='Select a time Clock Out'
        onChange={onChangeEnd}
        value={endOvertime}
        format={format}
      />
    </div>
  );
}

export default SettingOvertime;
