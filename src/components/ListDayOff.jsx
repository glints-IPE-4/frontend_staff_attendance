import React from 'react';
import PropTypes from 'prop-types';
import { useAlert } from 'react-alert';
import Moment from 'react-moment';
import Frame from '../assets/svg/Frame.svg';

const ListDayOff = props => {
  const { name, status, isAccepted, notes, date, proof } = props;
  const alert = useAlert();
  return (
    <span
      style={{ cursor: 'pointer', marginBottom: 10 }}
      role='button'
      tabIndex={-299}
      onClick={() =>
        alert.info(
          <div style={{ minWidth: 240, maxWidth: 500 }}>
            <div style={{ marginBottom: 24 }}>{notes}</div>
            {proof && (
              <a
                className='button rounded'
                target='_blank'
                style={{ textDecoration: 'none', marginTop: 24 }}
                href={`https://staffattendanceipe4.herokuapp.com/upload/${proof}`}
                rel='noreferrer'
              >
                Proof
              </a>
            )}
          </div>,
          {
            title: `Notes to ${name}`,
          },
        )
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
              <div className='status-staff-masuk info'>{status}</div>
              <div style={{ fontSize: 10, marginLeft: 5 }}>
                <Moment format='MMM Do YY'>{date}</Moment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

ListDayOff.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  isAccepted: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  proof: PropTypes.string,
};
ListDayOff.defaultProps = {
  proof: null,
};

export default ListDayOff;
