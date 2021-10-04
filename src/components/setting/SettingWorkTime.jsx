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
            <TimeKeeper
              time={startTime.formatted12}
              onChange={newTime => setStartTime(newTime)}
              onDoneClick={() => setShowStartTime(false)}
              switchToMinuteOnHourSelect
              closeOnMinuteSelect
            />
          )}
          {!showStartTime && (
            <span
              onClick={() => setShowStartTime(true)}
              style={{
                fontSize: '14px',
                color: '#DC143C',
                backgroundColor: '#e5e5e5',
                padding: '10px',
              }}
              aria-hidden='true'
            >
              {startTime.formatted12}
            </span>
          )}
        </div>
        <div className='end'>
          Clock Out :
          {showEndTime && (
            <TimeKeeper
              time={endTime.formatted12}
              onChange={newTime => setEndTime(newTime)}
              onDoneClick={() => setShowEndTime(false)}
              switchToMinuteOnHourSelect
              closeOnMinuteSelect
            />
          )}
          {!showEndTime && (
            <span
              onClick={() => setShowEndTime(true)}
              style={{
                fontSize: '14px',
                color: '#DC143C',
                backgroundColor: '#e5e5e5',
                padding: '10px',
              }}
              aria-hidden='true'
            >
              {endTime.formatted12}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

SettingWorkTime.propTypes = {
  startTime: PropTypes.string.isRequired,
  setStartTime: PropTypes.string.isRequired,
  setEndTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  showStartTime: PropTypes.string.isRequired,
  showEndTime: PropTypes.string.isRequired,
  setShowStartTime: PropTypes.string.isRequired,
  setShowEndTime: PropTypes.string.isRequired,
};

export default SettingWorkTime;
