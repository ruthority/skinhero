import React, { useState } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from "../../firebase"; // Ensure you import Firestore and Auth instances  
import { signInWithEmailAndPassword } from 'firebase/auth';
import Cookies from 'js-cookie';
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions  
import "../../index.css";

export default function AuthLoginPage() {
    const navigate = useNavigate(); // Initialize useNavigate  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false); // New checkbox state  
    const [errorMessage, setErrorMessage] = useState(''); // State to manage error messages  

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous errors  

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            // Fetch the user document from Firestore after successful login  
            const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                const userRole = userData.role; // Extract the role from Firestore  
                const username = userData.username; // Extract the username from Firestore  

                // Set a cookie with user information  
                const cookieExpiryDays = rememberMe ? 30 : 1; // Remember Me sets longer expiry  
                Cookies.set('user', JSON.stringify({
                    email: userData.email,
                    uid: userCredential.user.uid,
                    role: userRole,
                    username
                }), { expires: cookieExpiryDays });

                // Redirect based on user role, passing the username through state  
                if (userRole === 'consultant') {
                    navigate('/mydashboard/consultantdashboard', { state: { username } }); // Redirect to consultant dashboard  
                } else {
                    navigate('/mydashboard/userdashboard', { state: { username } }); // Redirect to user dashboard  
                }
            } else {
                // If user document does not exist  
                console.error("No such user document found!");
                setErrorMessage("User not found in the database. Please contact support.");
            }
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
                        required
                        autoComplete="email" // Add this line  
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
                        required
                        autoComplete="password" // Add this line  
                    />
                    <button
                        type="button"
                        className="icon-button"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                {/* Add Remember Me Checkbox */}
                <div className="remember-me-container">
                    <label>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(prev => !prev)}
                        />
                        Remember Me
                    </label>
                </div>
                <button type="submit" className="submit-button">Login</button>
                <div className="forgot-password-text">
                    <Link to="/auth/forgotpassword" className="forgot-password-link">Forgot Password?</Link>
                </div>
                <div className="signup-text">
                    Don't have an account? <Link to="/auth/signup" className="signup-link">Sign Up</Link>
                </div>
            </form>
        </div>
    );
}