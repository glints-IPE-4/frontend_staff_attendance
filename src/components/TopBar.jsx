import Moment from 'react-moment';
import Frame from '../assets/svg/Frame.svg';
import Notification from '../assets/svg/Notification.svg';
import Logout from '../assets/svg/Logout.svg';
import useAuth from '../providers/auth/context';

const TopBar = () => {
  const { auth, logout } = useAuth();
  return (
    <div className='sidebar-header'>
      <div className='date-button'>
        <div className='date'>
          <Moment interval={1000} format='MMM Do YYYY, h:mm:ss a' />
        </div>
        <div className='button clock-in'>Clock In</div>
      </div>

      <div className='header-role'>
        <div className='notif'>
          <img src={Notification} alt='Notification' />
        </div>
        <img src={Frame} alt='Frame' />
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

export default TopBar;
