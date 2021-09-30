import React from 'react';

const SettingDayOff = () => (
  <div className='card'>
    <div>
      <div className='card-tilte'>Setting </div>
      <input
        type='number'
        id='quantity'
        placeholder='Max Request Day Off'
        className='dayoff'
        min='0'
        max='7'
      />
      <div className='card-tilte'>Setting </div>
      <input
        type='number'
        id='quantity'
        placeholder='Max Request Day Off'
        className='quantity'
        min='0'
        max='7'
      />
    </div>
  </div>
);

export default SettingDayOff;
