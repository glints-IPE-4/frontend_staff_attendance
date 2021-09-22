import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Chart from 'react-apexcharts';

const RangeDate = days => {
  const moment = extendMoment(Moment);
  const start = moment().subtract(days, 'days').format('YYYY-MM-DD');
  const end = moment().format('YYYY-MM-DD');
  const range = moment.range(start, end);
  const acc = Array.from(range.by('day', { step: 1 }));
  return acc.map(m => m.format('MMM Do'));
};
const AttendanceChart = () => {
  const dates = RangeDate(7);
  const option = {
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
      categories: dates,
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
  };
  const series = [
    {
      name: 'Izin',
      data: [4, 2, 5, 3, 7, 3, 2],
    },
    {
      name: 'Sakit',
      data: [6, 3, 4, 0, 3, 2, 6],
    },
    {
      name: 'Telat',
      data: [2, 4, 7, 3, 1, 2, 2],
    },
    {
      name: 'Alpha',
      data: [1, 0, 3, 0, 3, 2, 6],
    },
  ];
  return (
    <div className='card chart'>
      <Chart options={option} series={series} height='500' />
    </div>
  );
};

export default AttendanceChart;
