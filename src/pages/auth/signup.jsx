import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { auth } from "../../firebase"; // Adjust path if needed
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "../../index.css";

export default function AuthSignupPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Handle user registration logic
            console.log("User signed up:", userCredential.user);
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    return (
        <div className="auth-container">
            <header className="headersignup">
                <h1 className="header-title">skinhero</h1>
            </header>
            <h1 className="auth-title">Sign Up</h1>
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="input-container auth-input-container">
                    <FaUser className="auth-icon" />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="auth-input"
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
                <button type="button" className="google-button">
                    <FaGoogle className="google-icon" /> Sign Up with Google
                </button>
            </form>
            <div className="login-text">
                Already have an account? <Link to="/auth/login" className="login-link">Login</Link>
            </div>
        </div>
    );
}