import React from 'react';
import MenuItem from './MenuItem';
import { ReactComponent as Category } from '../assets/svg/Category.svg';
import { ReactComponent as Users } from '../assets/svg/Users.svg';
import { ReactComponent as Settings } from '../assets/svg/Settings.svg';
import useAuth from '../providers/auth/context';

const menuItems = [
  { name: 'Dashboard', to: '/', Icon: Category, exact: true, protect: false },
  { name: 'Staff', to: '/staff', Icon: Users, exact: false, protect: true },
  { name: 'Account', to: '/account', Icon: Users, exact: false, protect: true },
  { name: 'Office', to: '/office', Icon: Settings, exact: false, protect: true },
  { name: 'Change Password', to: '/changepassword', Icon: Settings, exact: false, protect: false },
];

const Sidebar = () => {
  const { auth } = useAuth();
  return (
    <div className='sidebar'>
      <div className='header'>
        <div className='logo'>Attendance Tracker Apps</div>
      </div>
      <div className='divider' />
      <div className='main'>
        <span>
          {menuItems.map(menuItem => {
            if (menuItem.protect && !(auth.role === 'admin' || auth.role === 'hr')) {
              return <></>;
            }
            return (
              <MenuItem
                exact={menuItem.exact}
                key={menuItem.name}
                Icon={menuItem.Icon}
                name={menuItem.name}
                to={menuItem.to}
              />
            );
          })}
        </span>
      </div>
      <div className='divider' />
    </div>
  );
};

export default Sidebar;
