import React from "react";
import MenuItem from "./MenuItem";
import Category from "../assets/svg/Category.svg"
import User from "../assets/svg/User.svg"



const menuItems = [
    {name: "Dashboard", to: "/DashboardPage", icon:Category },
    {name: "Staff", to: "/StaffPage", icon:User }

];

const Sidebar =()=> (
    <div className="sidebar-header">
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
