import React from 'react';
import PropTypes from 'prop-types';
import Frame from '../assets/svg/Frame.svg';

const RequestDayOff = props => {
  const { name, status } = props;
  return (
    <span>
      <div className='list-staff'>
        <div className='list-staff-group'>
          <div className='photo'>
            <img src={Frame} alt='icon' />
          </div>
          <div className='name-status'>
            <div className='name-staff-'>{name}</div>
            <div className='status-staff-sakit'>{status}</div>
          </div>
        </div>
        <div className='button-request'>
          <div className='button rounded accept'>Accept</div>
          <div className='button rounded reject'>Reject</div>
        </div>
      </div>
    </span>
  );
};

RequestDayOff.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default RequestDayOff;