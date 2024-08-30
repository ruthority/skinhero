import React from "react";
import { Link } from "react-router-dom";
import "/src/index.css"; // Ensure styles are applied  

import ConsultantImage from "./Consultant.jpg"; // Default consultant image  
import NotificationImage from "./Notification.jpg"; // Default notification image  

const ConsultantDashboard = ({
    username,
    consultantAvatarUrl,
    notificationIconUrl,
}) => {
    return (
        <div className="consultant-dashboard-container">
            <div className="consultant-dashboard-header">
                <div
                    className="consultant-avatar"
                    style={{ backgroundImage: `url(${consultantAvatarUrl || ConsultantImage})` }}
                ></div>
                <div className="consultant-greeting">Hello, {username}</div>
                <div
                    className="notification-icon"
                    style={{ backgroundImage: `url(${notificationIconUrl || NotificationImage})` }}
                ></div>
            </div>
            <div className="consultant-button-container">
                <Link to="/mydashboard/Appointments" className="consultant-button">
                    <span>View Appointments</span>
                    <div className="consultant-icon-appointments" />
                </Link>
                <Link to="/mydashboard/ConductConsultation" className="consultant-button">
                    <span>Conduct Consultation</span>
                    <div className="consultant-icon-consultation" />
                </Link>
                <Link to="/mydashboard/ClientRecords" className="consultant-button">
                    <span>Access Client Records</span>
                    <div className="consultant-icon-records" />
                </Link>
            </div>
        </div>
    );
};

export default ConsultantDashboard;