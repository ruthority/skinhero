import React from 'react';
import { Link } from 'react-router-dom';
import image from './diagnosis.png';

export default function Diagnosis() {
    return (
        <div className="diagnosis-container">
            <header className="header">
                <h1 className="diagnosis-title">Diagnosis</h1>
            </header>
            <div className="diagnosis-content">
                <h2 className="assessment-title">Select Assessment Type</h2>
                <img src={image} alt="Diagnosis Icon" className="diagnosis-icon" />
                <div className="button-container">
                    <Link to="/quiz/acne" className="button"><span>Acne</span></Link>
                    <Link to="/quiz/hyperpigmentation" className="button"><span>Hyperpigmentation</span></Link>
                    <Link to="/quiz/skintype" className="button"><span>Skin Type</span></Link>
                </div>
            </div>
        </div>
    );
}