import axios from 'axios';
import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import Modal from 'react-modal';
import useAuth from '../providers/auth/context';

Modal.setAppElement('#main');
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
const RequestDayOffButton = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState('');
  const [img, setImg] = useState(null);
  const [desc, setDesc] = useState('sick');
  const { reqHeader } = useAuth();
  const alert = useAlert();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const doRequest = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('date', `${date}`);
      formData.append('description', desc);
      formData.append('image', img);
      const res = await axios.post(
        'http://staffattendanceipe4.herokuapp.com/auth/api/v1/dayoff',
        formData,
        {
          headers: reqHeader,
        },
      );
      setLoading(false);
      alert.info(res.data.message);
      window.location.reload();
    } catch (error) {
      alert.error(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={() => closeModal()}
        contentLabel='Accept Overtime'
      >
        <div className='modal-body'>
          <h2 className='title'>Request Dayoff</h2>
          <div className='content'>
            <input
              type='date'
              value={date}
              onChange={event => {
                setDate(event.target.value);
              }}
            />
            <select
              value={desc}
              onChange={event => {
                setDesc(event.target.value);
              }}
            >
              <option value='sick'>Sick</option>
              <option value='permit'>Permit</option>
            </select>
            <input
              type='file'
              onChange={e => {
                setImg(e.target.files[0]);
              }}
              accept='image/*'
            />
            <div className='btn-group'>
              <button type='button' className='button danger' onClick={closeModal}>
                Cancel
              </button>
              <button type='button' disabled={loading} onClick={doRequest} className='button'>
                {loading ? 'Loading...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <button type='button' onClick={openModal} className='button rounded'>
        Request Dayoff
      </button>
    </>
  );
};

export default RequestDayOffButton;
