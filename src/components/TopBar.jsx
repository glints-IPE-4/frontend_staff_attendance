import Moment from 'react-moment';
import { geolocated, geoPropTypes } from 'react-geolocated';
import Notification from '../assets/svg/Notification.svg';
import Logout from '../assets/svg/Logout.svg';
import useAuth from '../providers/auth/context';
import ClockInButton from './ClockInButton';

const TopBar = ({ isGeolocationAvailable, isGeolocationEnabled, coords, positionError }) => {
  const { auth, logout } = useAuth();

  const checkButton = () => {
    if (!isGeolocationAvailable) return <div>Your browser does not support Geolocation</div>;
    if (!isGeolocationEnabled) return <div>Geolocation is not enabled</div>;
    if (positionError) return <div>Something went wrong</div>;
    if (coords) return <ClockInButton coords={coords} />;
    return 'Error';
  };
  return (
    <div className='sidebar-header'>
      <div className='date-button'>
        <div className='date'>
          <Moment interval={1000} format='MMM Do YYYY, h:mm:ss a' />
        </div>
        {(auth.role === 'staff' || auth.role === 'hr') && checkButton()}
      </div>

      <div className='header-role'>
        <div className='notif'>
          <img src={Notification} alt='Notification' />
        </div>
        <img
          src={`https://avatars.dicebear.com/api/big-smile/${auth.email}.svg?size=50`}
          alt='Frame'
        />
        <div className='staff'>
          <div className='header-staff'>{auth.email}</div>
          <div className='role-staff'>{auth.role}</div>
        </div>
        <div role='button' tabIndex={-293} className='logout' onClick={logout} onKeyDown={logout}>
          <img src={Logout} alt='Logout' />
        </div>
      </div>
    </div>
  );
};
TopBar.propTypes = {
  ...geoPropTypes,
};

const GeoTopBar = geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  watchPosition: true,
  userDecisionTimeout: 5000,
})(TopBar);

export default GeoTopBar;
