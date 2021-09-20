import React from "react";
import Frame from "../assets/svg/Frame.svg"

const DashboardPage = () => (
    <div className="staff-view">
        <div className="card">
            <div className="card-title">List Day off</div>
            <div className="list-staff">
                <div className="photo"> <img src={Frame} alt="icon" /> </div>
                <div className="name-status">
                    <div className="name-staff">Aldi Nugraha</div>
                    <div className="status-staff">Sakit</div>
                </div>           
            </div>
            <div className="list-staff">
                <div className="photo"> <img src={Frame} alt="icon" /> </div>
                <div className="name-status">
                    <div className="name-staff">Aldi Nugraha</div>
                    <div className="status-staff">Sakit</div>
                </div>           
            </div>
        </div>
        <div className="card">
            <div className="card-title">Day Off Request</div>
            <div className="list-staff">
                <div className="photo"> <img src={Frame} alt="icon" /> </div>
                <div className="name-status">
                    <div className="name-staff">Aldi Nugraha</div>
                    <div className="status-staff">Sakit</div>
                </div>           
                <div className="button">
                    <div className="button-accept">Accept</div>
                    <div className="button-reject">Reject</div>          
            </div>
            </div>
            <div className="list-staff">
                <div className="photo"> <img src={Frame} alt="icon" /> </div>
                <div className="name-status">
                <div className="name-staff">Aldi Nugraha</div>
                <div className="status-staff">Sakit</div>
                </div> 
            <div className="button">
                <div className="button-accept">Accept</div>
                <div className="button-reject">Reject</div>          
            </div>
            </div>
        </div>
        <div className="card">
            <div className="card-title">List Overtime</div>
            <div className="list-staff">
                <div className="photo"> <img src={Frame} alt="icon" /> </div>
                <div className="name-status">
                <div className="name-staff">Aldi Nugraha</div>
                <div className="status-staff">Sakit</div>
                </div>           
            </div>
            <div className="list-staff">
                <div className="photo"> <img src={Frame} alt="icon" /> </div>
                <div className="name-status">
                <div className="name-staff">Aldi Nugraha</div>
                <div className="status-staff">Sakit</div>
                </div>           
            </div>
        </div>
        <div className="card">
            <div className="card-title">Overtime Request</div>
            <div className="list-staff">
                <div className="photo"> <img src={Frame} alt="icon" /> </div>
                <div className="name-status">
                <div className="name-staff">Aldi Nugraha</div>
                <div className="status-staff">Sakit</div>
                </div>           
            </div>
            <div className="list-staff">
                <div className="photo"> <img src={Frame} alt="icon" /> </div>
                <div className="name-status">
                <div className="name-staff">Aldi Nugraha</div>
                <div className="status-staff">Sakit</div>
                </div>           
            </div>
        </div>
    </div>
)

export default DashboardPage;
