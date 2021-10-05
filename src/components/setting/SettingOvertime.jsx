import React, { useState } from 'react';
import TimeKeeper from 'react-timekeeper';
import PropTypes from 'prop-types';

const SettingOvertime = props => {
  const { startOvertime, setStartOvertime, endOvertime, setEndOvertime } = props;
  const [showStartOvertime, setShowStartOvertime] = useState(false);
  const [showEndOvertime, setShowEndOvertime] = useState(false);
  return (
    <div className='card'>
      <div className='card-title'>setting Work Time</div>
      <div className='card-time'>
        <div className='Start'>
          Clock In :
          {showStartOvertime && (
            <div className='popup'>
              <TimeKeeper
                time={startOvertime.formatted12}
                onChange={newTime => setStartOvertime(newTime)}
                onDoneClick={() => setShowStartOvertime(false)}
                switchToMinuteOnHourSelect
                closeOnMinuteSelect
              />
            </div>
          )}
          {!showStartOvertime && (
            <button
              type='button'
              className='button-field'
              onClick={() => setShowStartOvertime(true)}
              aria-hidden='true'
            >
              {startOvertime.formatted12}
            </button>
          )}
        </div>
        <div className='end'>
          Clock Out :
          {showEndOvertime && (
            <div className='popup'>
              <TimeKeeper
                time={endOvertime.formatted12}
                onChange={newTime => setEndOvertime(newTime)}
                onDoneClick={() => setShowEndOvertime(false)}
                switchToMinuteOnHourSelect
                closeOnMinuteSelect
              />
            </div>
          )}
          {!showEndOvertime && (
            <button
              type='button'
              className='button-field'
              onClick={() => setShowEndOvertime(true)}
              aria-hidden='true'
            >
              {endOvertime.formatted12}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
SettingOvertime.propTypes = {
  startOvertime: PropTypes.string.isRequired,
  setStartOvertime: PropTypes.func.isRequired,
  setEndOvertime: PropTypes.func.isRequired,
  endOvertime: PropTypes.string.isRequired,
};
export default SettingOvertime;
