import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import useAuth from '../providers/auth/context';

const AttendanceChart = () => {
  const { reqHeader } = useAuth();
  const [loading, setLoading] = useState(false);
  const [sick, setSick] = useState([]);
  const [alpha, setAlpha] = useState([]);
  const [permit, setPermit] = useState([]);
  const [late, setLate] = useState([]);
  const [series, setSeries] = useState([
    { name: 'Sick', data: sick },
    { name: 'Late', data: late },
    { name: 'Alpha', data: alpha },
    { name: 'Permit', data: permit },
  ]);

  const [option, setOption] = useState({
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#77B6EA', '#545454', '#C04221', '#1AA053'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Attendance',
      align: 'left',
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
    markers: {
      size: 5,
    },
    xaxis: {
      type: 'datetime',

      max: Date.now(),
      title: {
        text: 'date',
      },
    },
    yaxis: {
      title: {
        text: 'Count',
      },
      min: 0,
      max: 10,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  });

  useEffect(() => {
    const doIt = () => {
      if (reqHeader.Authorization !== '') {
        setLoading(true);
        axios
          .get(`http://staffattendanceipe4.herokuapp.com/auth/api/v1/chart?description=late`, {
            headers: reqHeader,
          })
          .then(res => {
            setLate(res.data.message);
            setOption({
              ...option,
              xaxis: {
                ...option.xaxis,
                min: Date.now() - (res.data.message.length - 1) * 86400000,
              },
            });
          });
        axios
          .get(`http://staffattendanceipe4.herokuapp.com/auth/api/v1/chart?description=permit`, {
            headers: reqHeader,
          })
          .then(res => {
            setPermit(res.data.message);
          });
        axios
          .get(`http://staffattendanceipe4.herokuapp.com/auth/api/v1/chart?description=alpha`, {
            headers: reqHeader,
          })
          .then(res => {
            setAlpha(res.data.message);
          });
        axios
          .get(`http://staffattendanceipe4.herokuapp.com/auth/api/v1/chart?description=sick`, {
            headers: reqHeader,
          })
          .then(res => {
            setSick(res.data.message);
          });

        setLoading(false);
      }
    };
    doIt();
  }, [reqHeader]);

  useEffect(() => {
    setSeries([
      {
        name: 'Sick',
        data: sick.map((val, i) => [Date.now() - (sick.length - i - 1) * 86400000, val]),
      },
      {
        name: 'Late',
        data: late.map((val, i) => [Date.now() - (sick.length - i - 1) * 86400000, val]),
      },
      {
        name: 'Alpha',
        data: alpha.map((val, i) => [Date.now() - (sick.length - i - 1) * 86400000, val]),
      },
      {
        name: 'Permit',
        data: permit.map((val, i) => [Date.now() - (sick.length - i - 1) * 86400000, val]),
      },
    ]);
  }, [sick, late, permit, alpha]);

  return (
    <div className='card chart'>
      {loading ? 'Loading Chart ...' : <Chart options={option} series={series} height='500' />}
    </div>
  );
};

export default AttendanceChart;
