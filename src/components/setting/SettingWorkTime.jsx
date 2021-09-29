import React from 'react';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';

const SettingWorkTime = () => {
  const timeValueStart = new Date('01/01/2021 08:00 AM');
  const timeValueEnd = new Date('01/01/2021 05:00 PM');
  const minTime = new Date('01/01/2021 08:00 AM');
  const maxTime = new Date('01/01/2021 05:00 PM');
  return (
    <div className='work-time'>
      <div>Work Set Time</div>
      <div>
        <TimePickerComponent
          value={timeValueStart}
          min={minTime}
          max={maxTime}
          placeholder='Select a set Start Work'
        />
      </div>
      <div>
        <TimePickerComponent
          value={timeValueEnd}
          min={minTime}
          max={maxTime}
          placeholder='Select a set End Work'
        />
      </div>
    </div>
  );
};
export default SettingWorkTime;
