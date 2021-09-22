import React from 'react';
import { useSortBy, useTable } from 'react-table';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ActionCell = ({ value }) => (
  <div className='button-details'>
    <Link to={`staff/${value}`}>
      <div className='button rounded'>Details</div>{' '}
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
  const columns = React.useMemo(
    () => [
      {
        Header: 'Image',
        accessor: 'img',
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
        Header: 'Telp',
        accessor: 'telp',
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
        nip: '5433',
        nik: '55433',
        action: '5433',
        name: 'aldi',
        img: 'aldi',
        division: 'divA',
        telp: '093467548953',
      },
      {
        nip: '5413',
        action: '5433',
        nik: '5413',
        name: 'afan',
        img: 'afan',
        division: 'divB',
        telp: '093467646953',
      },
      {
        nip: '57533',
        action: '5433',
        nik: '57533',
        name: 'test',
        img: 'img',

        division: 'divA',
        telp: '093467523953',
      },
      {
        nip: '5433',
        nik: '5433',
        action: '5433',
        name: 'ares',
        img: 'ares',
        division: 'divC',
        telp: '09348658953',
      },
      {
        nip: '5433',
        nik: '5433',
        action: '5433',
        name: 'ares',
        img: 'ares',
        division: 'divC',
        telp: '09348658953',
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
        return ' 🔽';
      }
      return ' 🔼';
    }
    return '';
  };
  return (
    <div className='staff-view'>
      <div className='card '>
        <Link to='staff/new'>
          <div className='button rounded'>Add New Staff</div>
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

export default StaffPage;
