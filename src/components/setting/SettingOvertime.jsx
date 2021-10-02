import React from 'react';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';

const SettingOvertime = () => {
  const timeValueStart = new Date('');
  const timeValueEnd = new Date('');
  const minTime = new Date('01/01/2021 05:00 PM');
  const maxTime = new Date('01/01/2021 09:00 PM');

  return (
    <div className='card'>
      <div className='card-tilte'>Work Set Overtimes</div>
      <div>
        <TimePickerComponent
          value={timeValueStart}
          min={minTime}
          max={maxTime}
          placeholder='Select a set Start Overtime'
          floatLabelType='Auto'
        />
      </div>
      <div>
        <TimePickerComponent
          value={timeValueEnd}
          min={minTime}
          max={maxTime}
          placeholder='Select a set End Overtime'
          floatLabelType='Auto'
        />
      </div>
    </div>
  );
};

export default SettingOvertime;
