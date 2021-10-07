import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import { useSortBy, useTable } from 'react-table';
import useAuth from '../providers/auth/context';

const StaffDetailsTable = ({ email }) => {
  const [histories, setHistories] = useState(['']);
  const [overtime, setOvertime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [month, setMonth] = useState(moment().format('M'));
  const [year, setYear] = useState(moment().format('YYYY'));
  const { reqHeader } = useAuth();
  useEffect(() => {
    const fetch = async () => {
      try {
        setError(null);
        setLoading(true);
        const res = await axios.get(
          `http://staffattendanceipe4.herokuapp.com/auth/api/v1/attendancebystaff/${email}?month=${month}&year=${year}`,
          {
            headers: reqHeader,
          },
        );

        setHistories([...res.data.attendance]);
        setOvertime([...res.data.overtime]);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    if (reqHeader.Authorization !== '') {
      fetch();
    }
  }, [reqHeader, email, month, year]);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Day',
        accessor: 'day',
      },
      {
        Header: 'Status',
        accessor: 'description',
      },
      {
        Header: 'Total Hour',
        accessor: 'totalhours',
      },
    ],
    [],
  );

  const columnsOver = React.useMemo(
    () => [
      {
        Header: 'Day',
        accessor: 'day',
      },
      {
        Header: 'Status',
        accessor: 'description',
      },
      {
        Header: 'Total Hour',
        accessor: 'total_hours',
      },
    ],
    [],
  );
  const tableInstanceHis = useTable(
    {
      columns,
      data: histories,
    },
    useSortBy,
  );
  const tableInstanceOver = useTable(
    {
      columns: columnsOver,
      data: overtime,
    },
    useSortBy,
  );
  const {
    getTableProps: getTablePropsH,
    getTableBodyProps: getTableBodyPropsH,
    headerGroups: headerGroupsH,
    rows: rowsH,
    prepareRow: prepareRowH,
  } = tableInstanceHis;
  const {
    getTableProps: getTablePropsO,
    getTableBodyProps: getTableBodyPropsO,
    headerGroups: headerGroupsO,
    rows: rowsO,
    prepareRow: prepareRowO,
  } = tableInstanceOver;

  const showSortIcon = column => {
    if (column.isSorted) {
      if (column.isSortedDesc) {
        return '🔽';
      }
      return '🔼';
    }
    return '';
  };
  const tableBody = (getTableBodyProps, rows, prepareRow) => {
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
    <>
      <select value={month} onChange={event => setMonth(event.target.value)}>
        {Array.from(Array(12).keys()).map(val => (
          <option value={moment().subtract(val, 'months').format('M')}>
            {moment().subtract(val, 'months').format('MMMM')}
          </option>
        ))}
      </select>
      <select value={year} onChange={event => setYear(event.target.value)}>
        {Array.from(Array(6).keys()).map(val => (
          <option
            value={moment()
              .subtract(val - 3, 'years')
              .format('YYYY')}
          >
            {moment()
              .subtract(val - 3, 'years')
              .format('YYYY')}
          </option>
        ))}
      </select>
      <div style={{ display: 'grid', marginTop: 24, gridTemplateColumns: '1fr 1fr' }}>
        <div>
          Attendance
          <table {...getTablePropsH()} className='table'>
            <thead>
              {headerGroupsH.map(headerGroup => (
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
            {tableBody(getTableBodyPropsH, rowsH, prepareRowH)}
          </table>
        </div>
        <div>
          Overtime
          <table {...getTablePropsO()} className='table'>
            <thead>
              {headerGroupsO.map(headerGroup => (
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
            {tableBody(getTableBodyPropsO, rowsO, prepareRowO)}
          </table>
        </div>
      </div>
    </>
  );
};

StaffDetailsTable.propTypes = { email: PropTypes.string.isRequired };

export default StaffDetailsTable;
