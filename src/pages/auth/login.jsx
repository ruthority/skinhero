import React, { useState } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../../firebase"; // Adjust path if needed  
import { signInWithEmailAndPassword } from 'firebase/auth';
import "../../index.css";

export default function AuthLoginPage() {
    const navigate = useNavigate(); // Initialize useNavigate  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // State to manage error messages  

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Redirect to dashboard on successful login  
            console.log("User logged in:", userCredential.user);
            navigate('/auth/Dashboard/Dashboard'); // Make sure the path is correct for your application  
        } catch (error) {
            console.error("Error logging in:", error.message);
            setErrorMessage(error.message); // Store error message in state  
        }
    };

    return (
        <div className="auth-container">
            <header className="headersignup">
                <h1 className="header-title">skinhero</h1>
            </header>
            <h1 className="auth-title">Login</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error messages */}
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="input-container auth-input-container">
                    <FaUser className="auth-icon" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="auth-input"
                        required // Make this field required  
                    />
                </div>
                <div className="input-container auth-input-container">
                    <FaLock className="auth-icon" />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="auth-input"
                        required // Make this field required  
                    />
                    <button
                        type="button"
                        className="icon-button"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <button type="submit" className="submit-button">Login</button>
                <div className="forgot-password-text">
                    <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
                </div>
                <div className="signup-text">
                    Don't have an account? <Link to="/auth/signup" className="signup-link">Sign Up</Link>
                </div>
            </form>
        </div>
    );
}