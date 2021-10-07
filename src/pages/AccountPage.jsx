import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { useSortBy, useTable } from 'react-table';
import useAuth from '../providers/auth/context';

const ActionCell = ({ value }) => (
  <div className='button-details'>
    <Link to={`account/${value}`}>
      <div className='edit-button rounded'>Details</div>
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
  const tableInstance = useTable(
    {
      columns,
      data: listAccount,
    },
    useSortBy,
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  const showSortIcon = column => {
    if (column.isSorted) {
      if (column.isSortedDesc) {
        return '🔽';
      }
      return '🔼';
    }
    return '';
  };
  const tableBody = () => {
    if (loading)
      return (
        <tbody>
          <tr>
            <td>Loading...</td>
          </tr>
        </tbody>
      );

    return (
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} className={cell.name}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    );
  };
  return (
    <div className='staff-view'>
      <div className='card '>
        <Link to='account/create'>
          <div className='button rounded'>Create Account</div>
        </Link>
        <table {...getTableProps()} className='table'>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>{showSortIcon(column)}</span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {tableBody()}
        </table>
      </div>
    </div>
  );
};

export default AccountPage;
