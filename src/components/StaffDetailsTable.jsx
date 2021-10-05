import React from 'react';
import { useSortBy, useTable } from 'react-table';

const StaffDetailsTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
    ],
    [],
  );
  const data = React.useMemo(
    () => [
      { date: '9 November 2001', status: 'masuk' },
      { date: '8 November 2001', status: 'telat' },
      { date: '7 November 2001', status: 'izin' },
      { date: '6 November 2001', status: 'sakit' },
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
  );
};

export default StaffDetailsTable;
