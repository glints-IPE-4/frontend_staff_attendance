import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { useAlert } from 'react-alert';
import axios from 'axios';
import Modal from 'react-modal';
import Frame from '../assets/svg/Frame.svg';
import useAuth from '../providers/auth/context';

const customStyles = {
  overlay: {
    zIndex: 2,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '12px',
    boxShadow: ' 0px 10px 13px rgba(17, 38, 146, 0.05)',
    border: 'none',
  },
};
const ModalRequest = ({ id, name, modalIsOpen, closeModal, accept }) => {
  const alert = useAlert();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const { reqHeader } = useAuth();
  const confirmOvertime = async isAccepted => {
    try {
      setLoading(true);
      await axios.put(
        `http://staffattendanceipe4.herokuapp.com/auth/api/v1/overtime/${id}`,
        {
          email_staff: name,
          is_accepted: `${isAccepted}`,
          notes: value,
        },
        { headers: reqHeader },
      );
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setLoading(false);
      alert.error(error.response.data.message);
    }
  };
  const buttonText = () => {
    if (loading) return 'Loading...';
    if (accept) return 'Accept';
    return 'Reject';
  };
  return (
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal()}
      contentLabel='Accept Overtime'
    >
      <div className='modal-body'>
        <h2 className='title'>{accept ? 'Accept' : 'Reject'} Overtime</h2>
        <div className='content'>
          <textarea
            placeholder='Notes'
            value={value}
            onChange={event => {
              setValue(event.target.value);
            }}
          />
          <div className='btn-group'>
            <button type='button' className='button danger' onClick={closeModal}>
              Cancel
            </button>
            <button
              type='button'
              className='button'
              disabled={loading}
              onClick={() => {
                if (accept) confirmOvertime(1);
                else {
                  confirmOvertime(0);
                }
              }}
            >
              {buttonText()}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
ModalRequest.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  accept: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
const RequestOvertime = props => {
  const { name, status, id } = props;
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
        id={id}
        accept
        modalIsOpen={modalIsOpenAcc}
        closeModal={() => closeModalAcc()}
      />
      <ModalRequest
        name={name}
        id={id}
        modalIsOpen={modalIsOpenRej}
        closeModal={() => closeModalRej()}
      />
      <div className='list-staff'>
        <div className='list-staff-group'>
          <div className='photo'>
            <img src={Frame} alt='icon' />
          </div>
          <div className='name-status'>
            <div className='name-staff-'>{name}</div>
            <div className=''>
              <Moment format='DD MMM YYYY'>{status}</Moment>
            </div>
          </div>
        </div>
        <div className='button-request'>
          <div
            role='button'
            tabIndex={-203}
            className='button rounded accept'
            onClick={openModalAcc}
          >
            Accept
          </div>
          <div
            role='button'
            tabIndex={-233}
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

RequestOvertime.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default RequestOvertime;
