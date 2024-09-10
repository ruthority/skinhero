import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase'; // Make sure you have firebase configured  
import { signOut } from 'firebase/auth'; // Function to sign out  
import { useNavigate } from 'react-router-dom';
import '/src/index.css'; // Ensure styles are applied  

const Profile = () => {
    const navigate = useNavigate(); // Hook for navigation  
    const [user, setUser] = useState(null); // State to hold user information  

    useEffect(() => {
        const currentUser = auth.currentUser; // Get current user  
        if (currentUser) {
            setUser({
                email: currentUser.email,

                // You can add more user data if available  
            });
        } else {
            navigate('/auth/login'); // Redirect if user is not logged in  
        }
    }, [navigate]);

    const handleSignOut = async () => {
        try {
            await signOut(auth); // Sign out the user  
            navigate('/auth/login'); // Redirect to login page  
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    };

    return (
        <div className="profile-container">
            <h1 className="profile-title">User Profile</h1>
            {user ? (
                <div className="profile-info">
                    <div className="profile-item">
                        <strong>Email:</strong> {user.email}
                    </div>


                </div>
            ) : (
                <div className="loading-message">Loading user information...</div>
            )}
            <button className="sign-out-button" onClick={handleSignOut}>Log Out</button>
        </div>
    );
};

export default Profile;