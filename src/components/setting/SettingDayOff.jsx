import React, { useState } from 'react';

function SettingDayOff() {
  const [num, setNum] = useState('2');

  return (
    <div className='card'>
      <div className='card-title'>setting Day Off</div>
      <div>
        <input
          type='number'
          value={num}
          min='1'
          max='6'
          onChange={event => setNum(event.target.value)}
        />
      </div>
    </div>
  );
}

export default SettingDayOff;
