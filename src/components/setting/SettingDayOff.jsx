import React from 'react';
import PropTypes from 'prop-types';

const SettingDayOff = props => {
  const { dayOff, setDayOff } = props;

  return (
    <div className='card'>
      <div className='card-title'>setting Day Off</div>
      <div>
        <input
          type='number'
          value={dayOff}
          min='1'
          max='6'
          onChange={event => setDayOff(event.target.value)}
        />
      </div>
    </div>
  );
};

SettingDayOff.propTypes = {
  dayOff: PropTypes.string.isRequired,
  setDayOff: PropTypes.string.isRequired,
};

export default SettingDayOff;
