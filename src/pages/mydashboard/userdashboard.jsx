import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../../index.css"; // Ensure styles are applied  
import UserImage from "./User.jpg"; // Default user image  
import DoorbellImage from "./Doorbell.jpg"; // Default doorbell image  

const UserDashboard = () => {
    const location = useLocation();
    const { username } = location.state || {}; // Retrieve username from location state OR set to undefined  
    const userAvatarUrl = ''; // Logic to fetch user avatar URL if available  
    const bellIconUrl = ''; // Logic to fetch bell icon URL if available  

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div
                    className="user-avatar"
                    style={{ backgroundImage: `url(${userAvatarUrl || UserImage})` }}
                ></div>
                <div className="greeting">Hi, {username || 'Guest'}</div> {/* Display username or 'Guest' */}
                <div
                    className="doorbell-icon"
                    style={{ backgroundImage: `url(${bellIconUrl || DoorbellImage})` }}
                ></div>
            </div>
            <div className="button-container">
                <Link to="/mydashboard/Diagnosis" className="button">
                    <span>Start Diagnosis</span>
                    <div className="icon-diagnosis" />
                </Link>
                <Link to="/mydashboard/Consultation" className="button">
                    <span>Speak with a Consultant</span>
                    <div className="icon-consultant" />
                </Link>
                <Link to="/mydashboard/Results" className="button">
                    <span>Go to History</span>
                    <div className="icon-history" />
                </Link>
                <Link to="/mydashboard/findnearbyclinic" className="button">
                    <span>Find Clinic</span>
                    <div className="icon-history" />
                </Link>
            </div>
        </div>
    );
};

export default UserDashboard;