import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useRequest } from 'ahooks';
import useAuth from '../providers/auth/context';
import Table from '../components/Table';

const ActionCell = ({ value }) => (
  <div className='button-details'>
    <Link to={`account/${value}`}>
      <div className='edit-button rounded'>Details</div>
    </Link>
    <Link to={`account/edit/${value}`}>
      <div className='edit-button rounded'>Edit</div>
    </Link>
    <Link to={`account/delete/${value}`}>
      <div className='delete-button rounded'>Delete</div>
    </Link>
  </div>
);
ActionCell.propTypes = {
  value: PropTypes.string.isRequired,
};

const AccountPage = () => {
  const { reqHeader } = useAuth();
  const [listAccount, setListAccount] = useState([]);
  const {
    data: dataAccount,
    run: getAccount,
    loading,
  } = useRequest(
    () => ({
      url: 'http://staffattendanceipe4.herokuapp.com/auth/api/v1/account',
      method: 'get',
      headers: reqHeader,
    }),
    { manual: true },
  );
  useEffect(() => {
    if (reqHeader.Authorization !== '') {
      getAccount();
    }
  }, [reqHeader, getAccount]);
  useEffect(() => {
    if (dataAccount) {
      setListAccount(
        dataAccount.message.map(account => ({ ...account, action: String(account.email) })),
      );
    }
  }, [dataAccount]);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Role',
        accessor: 'role',
      },
      {
        Header: 'Nip',
        accessor: 'staff_nip',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Active',
        accessor: 'is_active',
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
        <Link to='account/create'>
          <div className='button rounded'>Create Account</div>
        </Link>
        <Table columns={columns} data={listAccount} loading={loading} />
      </div>
    </div>
  );
};

export default AccountPage;
