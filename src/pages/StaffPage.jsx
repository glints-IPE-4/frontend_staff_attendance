import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useRequest } from 'ahooks';
import useAuth from '../providers/auth/context';
import Table from '../components/Table';

const ActionCell = ({ value }) => (
  <div className='button-details'>
    <Link to={`staff/${value}`}>
      <div className='button rounded'>Details</div>
    </Link>
  </div>
);
ActionCell.propTypes = {
  value: PropTypes.string.isRequired,
};
const ImgCell = ({ value }) => (
  <img src={`https://avatars.dicebear.com/api/big-smile/${value}.svg?size=50`} alt='value' />
);
ImgCell.propTypes = {
  value: PropTypes.string.isRequired,
};
const StaffPage = () => {
  const { reqHeader } = useAuth();
  const [listStaff, setListStaff] = useState([]);
  const {
    data: dataUser,
    run: getStaff,
    loading,
  } = useRequest(
    () => ({
      url: 'http://staffattendanceipe4.herokuapp.com/auth/api/v1/staff',
      method: 'get',
      headers: reqHeader,
    }),
    { manual: true },
  );
  useEffect(() => {
    if (reqHeader.Authorization !== '') {
      getStaff();
    }
  }, [reqHeader, getStaff]);
  useEffect(() => {
    if (dataUser) {
      setListStaff(dataUser.message.map(user => ({ ...user, action: String(user.nip) })));
    }
  }, [dataUser]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Image',
        accessor: 'photo',
        Cell: ImgCell,
      },
      {
        Header: 'NIP',
        accessor: 'nip',
      },
      {
        Header: 'NIK',
        accessor: 'nik',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Division',
        accessor: 'division',
      },

      {
        Header: 'Phone Number',
        accessor: 'phone',
      },

      {
        Header: 'Action',
        accessor: 'action',
        Cell: ActionCell,
      },
    ],
    [],
  );

  return (
    <div className='staff-view'>
      <div className='card '>
        <Link to='staff/new'>
          <div className='button rounded'>Add New Staff</div>
        </Link>
        <Table columns={columns} data={listStaff} loading={loading} />
      </div>
    </div>
  );
};

export default StaffPage;
