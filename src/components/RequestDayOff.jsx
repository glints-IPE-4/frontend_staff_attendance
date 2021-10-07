import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Frame from '../assets/svg/Frame.svg';
import { ModalRequest } from './RequestOvertime';

const RequestDayOff = props => {
  const { name, status, date, proof, id } = props;
  const [modalIsOpenAcc, setIsOpenAcc] = useState(false);
  const [modalIsOpenRej, setIsOpenRej] = useState(false);

  function openModalAcc() {
    setIsOpenAcc(true);
  }
  function closeModalAcc() {
    setIsOpenAcc(false);
  }
  function openModalRej() {
    setIsOpenRej(true);
  }
  function closeModalRej() {
    setIsOpenRej(false);
  }

  return (
    <span>
      <ModalRequest
        name={name}
        accept
        title='Day Off'
        modalIsOpen={modalIsOpenAcc}
        closeModal={() => closeModalAcc()}
        url={`http://staffattendanceipe4.herokuapp.com/auth/api/v1/dayoff/${id}`}
      />

      <ModalRequest
        name={name}
        title='Day Off'
        modalIsOpen={modalIsOpenRej}
        closeModal={() => closeModalRej()}
        url={`http://staffattendanceipe4.herokuapp.com/auth/api/v1/dayoff/${id}`}
      />
      <ModalRequest />
      <div className='list-staff'>
        <div className='list-staff-group'>
          <div className='photo'>
            <img src={Frame} alt='icon' />
          </div>
          <div className='name-status'>
            <div className='name-staff-'>{name}</div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
              <div className='status-staff-sakit'>{status}</div>

              <div style={{ fontSize: 10, marginLeft: 5 }}>
                <Moment format='MMM Do YY'>{date}</Moment>
              </div>
            </div>
          </div>
        </div>
        <div className='button-request'>
          {proof && (
            <a
              className='button rounded'
              target='_blank'
              style={{ textDecoration: 'none', marginRight: 5 }}
              href={`https://staffattendanceipe4.herokuapp.com/upload/${proof}`}
              rel='noreferrer'
            >
              Proof
            </a>
          )}

          <div
            role='button'
            tabIndex={-193}
            onClick={openModalAcc}
            className='button rounded accept'
          >
            Accept
          </div>
          <div
            role='button'
            tabIndex={-143}
            className='button rounded reject'
            onClick={openModalRej}
          >
            Reject
          </div>
        </div>
      </div>
    </span>
  );
};

RequestDayOff.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  proof: PropTypes.string,
  id: PropTypes.number.isRequired,
};
RequestDayOff.defaultProps = {
  proof: null,
};
export default RequestDayOff;
