import React from 'react';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';

const SettingOvertime = () => {
  const timeValueStart = new Date('01/01/2021 05:00 PM');
  const timeValueEnd = new Date('01/01/2021 09:00 PM');
  const minTime = new Date('01/01/2021 05:00 PM');
  const maxTime = new Date('01/01/2021 09:00 PM');

  return (
    <div>
      <div className='work-time'>
        <div>Work Set Overtimes</div>
        <div>
          <TimePickerComponent
            value={timeValueStart}
            min={minTime}
            max={maxTime}
            placeholder='Select a set Start Overtime'
          />
        </div>
        <div>
          <TimePickerComponent
            value={timeValueEnd}
            min={minTime}
            max={maxTime}
            placeholder='Select a set End Overtime'
          />
        </div>
      </div>
    </div>
  );
};

export default SettingOvertime;
