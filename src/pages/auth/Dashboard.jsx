import React from 'react';
import "../../index.css"; // Ensure this path is correct

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="header">
                <div className="greeting">Hi, Ruth</div>
                <div className="user-avatar"></div>
                <div className="doorbell-icon"></div>
            </div>
            <div className="button-container">
                <div className="action-button">Action 1</div>
                <div className="action-button">Action 2</div>
                <div className="action-button">Action 3</div>
            </div>
            <div className="start-diagnosis">Start Diagnosis</div>
            <div className="speak-consultant">Speak with a Consultant</div>
            <div className="go-to-history">Go to history</div>
            <div className="medical-document"></div>
            <div className="doctor-consultation"></div>
            <div className="patient-card"></div>
        </div>
    );
};

export default Dashboard;