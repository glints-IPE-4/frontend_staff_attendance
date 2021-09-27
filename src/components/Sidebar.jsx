import React from 'react';
import MenuItem from './MenuItem';
import { ReactComponent as Category } from '../assets/svg/Category.svg';
import { ReactComponent as Users } from '../assets/svg/Users.svg';

const menuItems = [
  { name: 'Dashboard', to: '/', Icon: Category, exact: true },
  { name: 'Staff', to: '/staff', Icon: Users, exact: false },
  { name: 'Account', to: '/account', Icon: Users, exact: false },
];

const Sidebar = () => (
  <div className='sidebar'>
    <div className='header'>
      <div className='logo'>Attendance Tracker Apps</div>
    </div>
    <div className='divider' />
    <div className='main'>
      <span>
        {menuItems.map(menuItem => (
          <MenuItem
            exact={menuItem.exact}
            key={menuItem.name}
            Icon={menuItem.Icon}
            name={menuItem.name}
            to={menuItem.to}
          />
        ))}
      </span>
    </div>
    <div className='divider' />
  </div>
);

export default Sidebar;
