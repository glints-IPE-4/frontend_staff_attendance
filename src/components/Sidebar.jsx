import React from "react";
import MenuItem from "./MenuItem";
import Category from "../assets/svg/Category.svg"
import User from "../assets/svg/User.svg"
import Frame from '../assets/svg/Frame.svg'
import Notification from '../assets/svg/Notification.svg'



const menuItems = [
    {name: "Dashboard", to: "/DashboardPage", icon:Category },
    {name: "Staff", to: "/StaffPage", icon:User }

];

const Sidebar =()=> (
    <div className="sidebar-header">
        <div className="date-button">
          <div className="date">Jan 19, 2021 09:00 AM</div>
          <div className="button-Clock-in">Clock In</div>
          <img src={Notification} alt="Notification" />
        </div>
        <div className="header-role">
        <img src={Frame} alt="Frame" />
        <div>
          <div className="header-staff">Aldi Nugraha</div>
          <div className="role-staff">Admin</div>
        </div>
        </div>  
        <div className="sidebar">
            <div className="header">
                <div className="header-item">
                    <div className="logo">Attendance Tracker Apps</div>
                </div>
            </div>
            <div className="divider" />
            <div className="main">
                <span>
                    {menuItems.map((menuItem) => (
                    <MenuItem 
                    key={menuItem.id}
                    icon={menuItem.icon}
                    name={menuItem.name}
                    to={menuItem.to}
                    />
                    ))}
                </span>
            </div>
            <div className="divider" />
        </div>
    </div>
    )

export default Sidebar;
