import React from 'react';

const SettingDayOff = () => (
  <div className='card'>
    <div>
      <div>Work Set Overtimes</div>
      <input
        type='number'
        id='quantity'
        placeholder='Max Request Day Off'
        name='quantity'
        min='1'
        max='3'
      />
    </div>
  </div>
);

export default SettingDayOff;
