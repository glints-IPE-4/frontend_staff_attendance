import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { useAlert } from 'react-alert';
import Frame from '../assets/svg/Frame.svg';

const ListOvertime = props => {
  const { name, status, isAccepted, notes } = props;
  const alert = useAlert();
  return (
    <span
      style={{ cursor: 'pointer', marginBottom: 10 }}
      role='button'
      tabIndex={-299}
      onClick={() =>
        alert.info(<div style={{ minWidth: 240, maxWidth: 500 }}>{notes}</div>, {
          title: `Notes to ${name}`,
        })
      }
    >
      <div className='list-staff'>
        <div className='list-staff-group'>
          <div className='photo'>
            <img src={Frame} alt='icon' />
          </div>
          <div className='name-status'>
            <div className='name-staff'>{name}</div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
              <div className={`status-staff-masuk ${isAccepted === '1' ? 'accept' : 'reject'}`}>
                {isAccepted === '1' ? 'Accept' : 'Reject'}
              </div>
              <div style={{ fontSize: 10, marginLeft: 5 }}>
                <Moment format='MMM Do YY'>{status}</Moment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

ListOvertime.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  isAccepted: PropTypes.string.isRequired,
};

export default ListOvertime;
