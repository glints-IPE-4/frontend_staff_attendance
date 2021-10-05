import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TimeKeeper from 'react-timekeeper';

const SettingDayOff = props => {
  const { dayOff, setDayOff, lateTime, setLateTime } = props;
  const [showLateTime, setShowLateTime] = useState(false);
  return (
    <div className='card'>
      <div className='card-title'>setting Day Off</div>
      <div className='card-time'>
        <div className='start'>
          Max Request Day Off :
          <input
            type='number'
            value={dayOff}
            min='1'
            max='6'
            onChange={event => setDayOff(event.target.value)}
          />
        </div>
        <div className='Start'>
          Max Late :
          {showLateTime && (
            <div className='popup'>
              <div className='popup-inner'>
                <TimeKeeper
                  time={lateTime.formatted12}
                  onChange={newTime => setLateTime(newTime)}
                  onDoneClick={() => setShowLateTime(false)}
                  switchToMinuteOnHourSelect
                  closeOnMinuteSelect
                />
              </div>
            </div>
          )}
          {!showLateTime && (
            <button className='button-field' type='button' onClick={() => setShowLateTime(true)}>
              {lateTime.formatted12}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

SettingDayOff.propTypes = {
  dayOff: PropTypes.string.isRequired,
  setDayOff: PropTypes.func.isRequired,
  lateTime: PropTypes.string.isRequired,
  setLateTime: PropTypes.func.isRequired,
};

export default SettingDayOff;
