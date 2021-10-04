import React from 'react';
import TimeKeeper from 'react-timekeeper';
import PropTypes from 'prop-types';

const SettingOvertime = props => {
  const {
    showStartOvertime,
    setShowStartOvertime,
    showEndOvertime,
    setShowEndOvertime,
    startOvertime,
    setStartOvertime,
    endOvertime,
    setEndOvertime,
  } = props;
  return (
    <div className='card'>
      <div className='card-title'>setting Work Time</div>
      <div className='card-time'>
        <div className='Start'>
          Clock In :
          {showStartOvertime && (
            <TimeKeeper
              time={startOvertime.formatted12}
              onChange={newTime => setStartOvertime(newTime)}
              onDoneClick={() => setShowStartOvertime(false)}
              switchToMinuteOnHourSelect
              closeOnMinuteSelect
            />
          )}
          {!showStartOvertime && (
            <span
              onClick={() => setShowStartOvertime(true)}
              style={{
                fontSize: '14px',
                color: '#DC143C',
                backgroundColor: '#e5e5e5',
                padding: '10px',
              }}
              aria-hidden='true'
            >
              {startOvertime.formatted12}
            </span>
          )}
        </div>
        <div className='end'>
          Clock Out :
          {showEndOvertime && (
            <TimeKeeper
              time={endOvertime.formatted12}
              onChange={newTime => setEndOvertime(newTime)}
              onDoneClick={() => setShowEndOvertime(false)}
              switchToMinuteOnHourSelect
              closeOnMinuteSelect
            />
          )}
          {!showEndOvertime && (
            <span
              onClick={() => setShowEndOvertime(true)}
              style={{
                fontSize: '14px',
                color: '#DC143C',
                backgroundColor: '#e5e5e5',
                padding: '10px',
              }}
              aria-hidden='true'
            >
              {endOvertime.formatted12}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
SettingOvertime.propTypes = {
  startOvertime: PropTypes.func.isRequired,
  setStartOvertime: PropTypes.func.isRequired,
  setEndOvertime: PropTypes.func.isRequired,
  endOvertime: PropTypes.func.isRequired,
  showStartOvertime: PropTypes.func.isRequired,
  showEndOvertime: PropTypes.func.isRequired,
  setShowStartOvertime: PropTypes.func.isRequired,
  setShowEndOvertime: PropTypes.func.isRequired,
};
export default SettingOvertime;
