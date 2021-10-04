import React, { useState } from 'react';
import TimeKeeper from 'react-timekeeper';

const SettingWorkTime = () => {
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

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

export default SettingWorkTime;
