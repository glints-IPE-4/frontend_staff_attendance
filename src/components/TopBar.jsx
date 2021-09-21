import Frame from '../assets/svg/Frame.svg';
import Notification from '../assets/svg/Notification.svg';
import Logout from '../assets/svg/Logout.svg';

const TopBar = () => (
  <div className='sidebar-header'>
    <div className='date-button'>
      <div className='date'>Jan 19, 2021 09:00 AM</div>
      <div className='button clock-in'>Clock In</div>
    </div>

    <div className='header-role'>
      <div className='notif'>
        <img src={Notification} alt='Notification' />
      </div>
      <img src={Frame} alt='Frame' />
      <div className='staff'>
        <div className='header-staff'>Aldi Nugraha</div>
        <div className='role-staff'>Admin</div>
      </div>
      <div className='logout'>
        <img src={Logout} alt='Logout' />
      </div>
    </div>
  </div>
);

export default TopBar;
