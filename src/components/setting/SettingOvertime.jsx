import React, { useState } from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

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
        placeholder='Select Clock in'
        onChange={onChangeStart}
        defaultValue={moment('19:00', format)}
        value={startOvertime}
        format={format}
      />
      <TimePicker
        placeholder='Select Clock Out'
        onChange={onChangeEnd}
        defaultValue={moment('21:00', format)}
        value={endOvertime}
        format={format}
      />
    </div>
  );
}

export default SettingOvertime;
