import React, { useState } from 'react';
import { InputNumber } from 'antd';

function SettingDayOff() {
  const [values, setValues] = useState();
  const onChange = value => {
    setValues(value);
  };
  return (
    <div className='card'>
      <div className='card-title'>setting Day Off</div>
      <div>
        <InputNumber
          aria-label='day off'
          placeholder='max Day Off'
          min={1}
          max={6}
          defaultValue={3}
          value={values}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default SettingDayOff;
