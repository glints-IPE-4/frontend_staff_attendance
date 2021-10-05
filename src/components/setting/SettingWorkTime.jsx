import React from 'react';
import TimeKeeper from 'react-timekeeper';
import PropTypes from 'prop-types';

const SettingWorkTime = props => {
  const {
    showStartTime,
    setShowStartTime,
    showEndTime,
    setShowEndTime,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
  } = props;
  return (
    <div className='card'>
      <div className='card-title'>setting Work Time</div>
      <div className='card-time'>
        <div className='Start'>
          Clock In :
          {showStartTime && (
            <div className='popup'>
              <div className='popup-inner'>
                <TimeKeeper
                  time={startTime.formatted12}
                  onChange={newTime => setStartTime(newTime)}
                  onDoneClick={() => setShowStartTime(false)}
                  switchToMinuteOnHourSelect
                  closeOnMinuteSelect
                />
              </div>
            </div>
          )}
          {!showStartTime && (
            <button className='button-field' type='button' onClick={() => setShowStartTime(true)}>
              {startTime.formatted12}
            </button>
          )}
        </div>
        <div className='end'>
          Clock Out :
          {showEndTime && (
            <div className='popup'>
              <div className='popup-inner'>
                <TimeKeeper
                  time={endTime.formatted12}
                  onChange={newTime => setEndTime(newTime)}
                  onDoneClick={() => setShowEndTime(false)}
                  switchToMinuteOnHourSelect
                  closeOnMinuteSelect
                />
              </div>
            </div>
          )}
          {!showEndTime && (
            <button
              className='button-field'
              type='button'
              onClick={() => setShowEndTime(true)}
              aria-hidden='true'
            >
              {endTime.formatted12}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

SettingWorkTime.propTypes = {
  startTime: PropTypes.string.isRequired,
  setStartTime: PropTypes.func.isRequired,
  setEndTime: PropTypes.func.isRequired,
  endTime: PropTypes.string.isRequired,
  showStartTime: PropTypes.bool.isRequired,
  showEndTime: PropTypes.bool.isRequired,
  setShowStartTime: PropTypes.func.isRequired,
  setShowEndTime: PropTypes.func.isRequired,
};

export default SettingWorkTime;
