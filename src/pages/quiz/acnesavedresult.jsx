
import React, { useEffect, useState } from 'react';
import { db } from "../../firebase"; // Import Firestore instance
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import Firebase Auth
import '/src/index.css'; // Ensure this path is correct for your project's file structure

export default function AcneSavedResult() {
    const [lastResult, setLastResult] = useState(null);
    const auth = getAuth(); // Get the Firebase Auth instance
    const currentUser = auth.currentUser; // Get the current user
    const userId = currentUser ? currentUser.uid : null; // Use the user's UID

    useEffect(() => {
        const fetchLastResult = async () => {
            if (!userId) return; // Exit if userId is not available

            try {
                const resultsQuery = query(
                    collection(db, "users", userId, "acneResults"),
                    orderBy("timestamp", "desc"),
                    limit(1)
                );

                const querySnapshot = await getDocs(resultsQuery);
                if (!querySnapshot.empty) {
                    const lastResultData = querySnapshot.docs[0].data();
                    setLastResult(lastResultData);
                }
            } catch (error) {
                console.error("Error fetching last result: ", error);
            }
        };

        fetchLastResult();
    }, [userId]);

    return (
        <div className="acne-result-page">
            <div className="acne-result-header">
                <h1>Last Saved Acne Assessment Result</h1>
            </div>
            <div className="acne-result-container">
                {lastResult ? (
                    <ul>
                        <li><strong>Selected Acne Types:</strong> {lastResult.selectedAcne.join(', ')}</li>
                        <li><strong>Saved on:</strong> {new Date(lastResult.timestamp).toLocaleString()}</li>
                    </ul>
                ) : (
                    <p>No saved results found.</p>
                )}
            </div>
        </div>
    );
}