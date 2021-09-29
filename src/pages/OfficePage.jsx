import React from 'react';
import SettingWorkTime from '../components/setting/SettingWorkTime';
import SettingOvertime from '../components/setting/SettingOvertime';
import SettingDayOff from '../components/setting/SettingDayOff';
import SetOfficeLocation from '../components/setting/SetOfficeLocation';

const OfficePage = () => (
  <div className='office'>
    <h3>Office Setting</h3>
    <SettingWorkTime />
    <SettingOvertime />
    <SettingDayOff />
    <SetOfficeLocation />
  </div>
);
export default OfficePage;
