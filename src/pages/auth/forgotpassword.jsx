import React, { useState } from 'react';
import { auth } from "../../firebase"; // Import your Firebase auth instance  
import { sendPasswordResetEmail } from 'firebase/auth'; // Function to send password reset email  
import { useNavigate } from 'react-router-dom'; // Hook for navigation  
import '../../index.css';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate(); // Hook to programmatically navigate  

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload  
        setErrorMessage(''); // Clear previous error messages  
        setSuccessMessage(''); // Clear previous success messages  

        try {
            await sendPasswordResetEmail(auth, email);
            setSuccessMessage('Password reset email sent! Please check your inbox.'); // Set success message  
            // Optional: Redirect or navigate to a different page after a short delay  
            setTimeout(() => {
                navigate('/auth/login'); // Redirect to login page after sending the email  
            }, 3000);
        } catch (error) {
            console.error("Error sending password reset email:", error.message);
            setErrorMessage(error.message); // Display error message  
        }
    };

    return (
        <div className="auth-container">
            <header className="headersignup">
                <h1 className="header-title">skinhero</h1>
            </header>
            <h1 className="auth-title">Forgot Password</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error messages */}
            {successMessage && <div className="success-message">{successMessage}</div>} {/* Display success messages */}
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="input-container auth-input-container">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="auth-input"
                        required // Make this field required  
                    />
                </div>
                <button type="submit" className="submit-button">Send Reset Link</button>
                <div className="login-text">
                    Remembered your password? <a href="/auth/login" className="login-link">Login</a>
                </div>
            </form>
        </div>
    );
}