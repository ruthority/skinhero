import React from 'react';
import { Link } from 'react-router-dom';
import image from './result.png';

export default function Results() {
    return (
        <div className="results-container">
            <div className="results-header">
                <h1>Results</h1>
            </div>
            <div className="results-content">
                <h2 className="results-title">Select Result Type</h2>
                <img src={image} alt="Results Icon" className="results-icon" />
                <div className="results-button-container">
                    <Link to="/quiz/acnesavedresult" className="results-button"><span>Acne Assessment Result</span></Link>
                    <Link to="/quiz/hyperpigmentationsavedresult" className="results-button"><span>Hyperpigmentation Result</span></Link>
                    <Link to="/quiz/skintypesavedresult" className="results-button"><span>Skin Type Result</span></Link>
                    <Link to="/quiz/productrecommendations" className="results-button"><span>Product Recommendations</span></Link>
                </div>
            </div>
        </div>
    );
}