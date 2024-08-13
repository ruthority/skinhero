import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; // Adjust path if needed  
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "../../index.css";

export default function AuthSignupPage() {
    const navigate = useNavigate(); // For navigation after signup  
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // For error messages  
    const [successMessage, setSuccessMessage] = useState(''); // For success messages  

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(prev => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Reset error on new submission  
        setSuccessMessage(''); // Reset success message  

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Optional: Save additional user info such as username in Firestore or Realtime Database  
            console.log("User signed up:", userCredential.user);
            setSuccessMessage("User registered successfully!");
            // Optionally navigate to login or dashboard after success  
            navigate('/auth/login'); // Redirect to login after successful signup  
        } catch (error) {
            console.error("Error signing up:", error.message);
            setErrorMessage(error.message); // Set error message  
        }
    };

    return (
        <div className="auth-container">
            <header className="headersignup">
                <h1 className="header-title">skinhero</h1>
            </header>
            <h1 className="auth-title">Sign Up</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
            {successMessage && <div className="success-message">{successMessage}</div>} {/* Display success message */}
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="input-container auth-input-container">
                    <FaUser className="auth-icon" />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="auth-input"
                        required // Make this field required  
                    />
                </div>
                <div className="input-container auth-input-container">
                    <FaEnvelope className="auth-icon" />
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
                <div className="input-container auth-input-container">
                    <FaLock className="auth-icon" />
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="auth-input"
                        required // Make this field required  
                    />
                    <button
                        type="button"
                        className="icon-button"
                        onClick={toggleConfirmPasswordVisibility}
                    >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <button type="submit" className="submit-button">Sign Up</button>

            </form>
            <div className="login-text">
                Already have an account? <Link to="/auth/login" className="login-link">Login</Link>
            </div>
        </div>
    );
}