import React from 'react';
import { InputNumber } from 'antd';

function SettingDayOff() {
  const onChange = value => {
    onChange('changed', value);
  };
  return (
    <div className='card'>
      <div className='card-title'>setting Day Off</div>
      <div>
        <InputNumber aria-label='day off' min={1} max={6} defaultValue={3} onChange={onChange} />
      </div>
    </div>
  );
}

export default SettingDayOff;
