import React from 'react';
import { useSortBy, useTable } from 'react-table';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ActionCell = ({ value }) => (
  <div className='button-details'>
    <Link to={`account/edit/${value}`}>
      <div className='button rounded'>Edit</div>
    </Link>
    <Link to={`account/delete/${value}`}>
      <div className='button rounded'>Delete</div>
    </Link>
  </div>
);
ActionCell.propTypes = {
  value: PropTypes.string.isRequired,
};

const AccountPage = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Role',
        accessor: 'role',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ActionCell,
      },
    ],
    [],
  );
  const data = React.useMemo(
    () => [
      {
        email: 'blakepaw@yahoo.do',
        role: 'Admin',
        action: 'blakepaw@yahoo.do',
        name: 'Ferry Anderson',
      },
      {
        email: 'cheatengine@rocketmail.do',
        role: 'HR',
        action: 'blakepaw@yahoo.do',
        name: 'Iwan Steward',
      },
      {
        email: 'blakepaw@breakdown.do',
        role: 'HR',
        action: 'blakepaw@yahoo.do',
        name: 'blaem anderson',
      },
    ],
    [],
  );

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  const firstPageRows = rows.slice(0, 20);
  const showSortIcon = column => {
    if (column.isSorted) {
      if (column.isSortedDesc) {
        return '🔽';
      }
      return '🔼';
    }
    return '';
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
          <tbody {...getTableBodyProps()}>
            {firstPageRows.map(row => {
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
        </table>
      </div>
    </div>
  );
};

export default AccountPage;
