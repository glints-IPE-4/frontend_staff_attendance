import * as React from 'react';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

const SettingDayOff = () => {
  const itemValues = { name: 'quantity', min: '1', max: '6' };
  return (
    <div className='card'>
      <div className='card-title'>Setting Max Day Off</div>
      <NumericTextBoxComponent htmlAttributes={itemValues} />
    </div>
  );
};

export default SettingDayOff;
