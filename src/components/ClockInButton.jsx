import React, { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { geoPropTypes } from 'react-geolocated';
import useAuth from '../providers/auth/context';

const getStatus = statuses => {
  if (statuses) {
    if (statuses.clock_in === 1) {
      return 'Clock In';
    }
    if (statuses.clock_out === 1) {
      return 'Clock Out';
    }
    if (statuses.clock_in_overtime === 1) {
      return 'Clock In Overtime';
    }
    if (statuses.clock_overtime === 1) {
      return 'Clock Out Overtime';
    }
    if (statuses.dayoff === 1) {
      return 'Day Off';
    }
    if (statuses.weekend === 1) {
      return 'Weekend';
    }
    return 'Loading..';
  }
  return 'Loading..';
};
const getAPI = statuses => {
  if (statuses) {
    if (statuses.clock_in === 1) {
      return 'clockin';
    }
    if (statuses.clock_out === 1) {
      return 'clockout';
    }
    if (statuses.clock_in_overtime === 1) {
      return 'clockinovertime';
    }
    if (statuses.clock_overtime === 1) {
      return 'clockoutovertime';
    }

    return '';
  }
  return '';
};

const ClockInButton = ({ coords }) => {
  const { reqHeader } = useAuth();
  const [status, setstatus] = useState();
  const [loadAtt, setLoadAtt] = useState(false);

  const alert = useAlert();
  const { loading, run } = useRequest(
    () => ({
      url: `http://staffattendanceipe4.herokuapp.com/auth/api/v1/cekattendance`,
      method: 'get',
      headers: reqHeader,
    }),
    { manual: true, onSuccess: datas => setstatus({ ...datas }) },
  );

  useEffect(() => {
    if (reqHeader.Authorization !== '') {
      run();
    }
  }, [reqHeader, run]);

  const runAtt = () =>
    axios.post(
      `http://staffattendanceipe4.herokuapp.com/auth/api/v1/${getAPI(status)}`,
      {
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
      { headers: reqHeader },
    );
  return (
    <button
      type='button'
      disabled={loading || loadAtt}
      className='button clock-in'
      onClick={async () => {
        try {
          setLoadAtt(true);
          const res = await runAtt();
          alert.error(res.data.message);
          setLoadAtt(false);
        } catch (error) {
          setLoadAtt(false);

          alert.error(error.response.data.message);
        }
      }}
    >
      {loading || loadAtt ? 'Loading...' : getStatus(status)}
    </button>
  );
};

ClockInButton.propTypes = { coords: geoPropTypes.coords };
ClockInButton.defaultProps = {
  coords: {
    latitude: 0,
    longitude: 0,
    altitude: 0,
    accuracy: 0,
    altitudeAccuracy: 0,
    heading: 0,
    speed: 0,
  },
};

export default ClockInButton;
