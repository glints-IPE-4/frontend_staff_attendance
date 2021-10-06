/* eslint-disable react/prop-types */
import React from 'react';
import { useTable } from 'react-table';
// import PropTypes from 'prop-types';s

// eslint-disable-next-line react/prop-types
export default function Table({ columns, data, loading, error = null }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });
  const tableBody = () => {
    if (loading)
      return (
        <tbody>
          <tr>
            <td>Loading...</td>
          </tr>
        </tbody>
      );
    if (error)
      return (
        <tbody>
          <tr>
            <td>{error.response.data.message}.</td>
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
    <table {...getTableProps()} className='table'>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      {tableBody()}
    </table>
  );
}
