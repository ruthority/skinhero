import React from 'react';
import '/src/index.css'; // Import your CSS file  

const Consultation = () => {
    return (
        <div className="consultation-page-container">
            <header className="header">
                <h1 className="consultation-page-title">Consultation</h1>
            </header>
            <div className="consultation-content">
                <p className="consultation-page-description">
                    Welcome to your consultation page. Here, you can contact Skin Health professionals to assist you with your skincare needs.
                </p>

                <div className="consultation-booking-form">
                    <h2 className="consultation-form-title">Book a Consultation</h2>
                    <form className="consultation-form">
                        <label className="consultation-form-label" htmlFor="name">Name:</label>
                        <input className="consultation-form-input" type="text" id="name" name="name" required />

                        <label className="consultation-form-label" htmlFor="email">Email:</label>
                        <input className="consultation-form-input" type="email" id="email" name="email" required />

                        <label className="consultation-form-label" htmlFor="message">Message:</label>
                        <textarea className="consultation-form-textarea" id="message" name="message" rows="4" required></textarea>

                        <button type="submit" className="consultation-submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Consultation;