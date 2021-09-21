import React from 'react';
import PropTypes from 'prop-types';
import Frame from '../assets/svg/Frame.svg';

const ListOvertime = props => {
  const { name, status } = props;
  return (
    <span>
      <div className='list-staff'>
        <div className='list-staff-group'>
          <div className='photo'>
            <img src={Frame} alt='icon' />
          </div>
          <div className='name-status'>
            <div className='name-staff'>{name}</div>
            <div className='status-staff-masuk'>{status}</div>
          </div>
        </div>
      </div>
    </span>
  );
};

ListOvertime.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default ListOvertime;
