import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../../index.css"; // Ensure styles are applied  
import ConsultantImage from "./User.jpg"; // Default consultant image  
import NotificationImage from "./Doorbell.jpg"; // Default notification image  

const ConsultantDashboard = () => {
    const location = useLocation();
    const { username } = location.state || {}; // Retrieve username from location state OR set to undefined  

    return (
        <div className="consultant-dashboard-container">
            <div className="consultant-dashboard-header">
                <Link to="/mydashboard/profile" className="profile-link">
                    <div
                        className="consultant-avatar"
                        style={{ backgroundImage: `url(${ConsultantImage})` }}
                    ></div>
                </Link>
                <div className="consultant-greeting">Hello, {username || 'Guest'}</div> {/* Display username or 'Guest' */}
            </div>
            <div className="consultant-button-container">
                <Link to="/mydashboard/Appointments" className="consultant-button">
                    <span>View Appointments</span>
                </Link>
                <Link to="/mydashboard/ConductConsultation" className="consultant-button">
                    <span>Conduct Consultation</span>
                </Link>
                <Link to="/mydashboard/ClientRecords" className="consultant-button">
                    <span>Access Client Records</span>
                </Link>
            </div>
        </div>
    );
};

export default ConsultantDashboard;