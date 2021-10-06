import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import useAuth from '../providers/auth/context';
import Table from './Table';

const StaffDetailsTable = ({ email }) => {
  const [histories, setHistories] = useState([]);
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
          <Table columns={columns} data={histories} loading={loading} error={error} />
        </div>
        <div>
          Overtime
          <Table columns={columnsOver} data={overtime} loading={loading} error={error} />
        </div>
      </div>
    </>
  );
};

StaffDetailsTable.propTypes = { email: PropTypes.string.isRequired };

export default StaffDetailsTable;
