import React from 'react';
import PropTypes from 'prop-types';
import Frame from '../assets/svg/Frame.svg';

const RequestOvertime = props => {
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
            <div className='status-staff-masuk'>{status}</div>
          </div>
        </div>
        <div className='button-request'>
          <div className='button-accept'>Accept</div>
          <div className='button-reject'>Reject</div>
        </div>
      </div>
    </span>
  );
};

RequestOvertime.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default RequestOvertime;
