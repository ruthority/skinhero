import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate  
import { db } from "../../firebase"; // Import Firestore instance  
import { doc, setDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import Firebase Auth  
import '/src/index.css'; // Ensure this path is correct for your project's file structure  

export default function HyperpigmentationResult() {
    const navigate = useNavigate(); // Initialize navigate  
    const location = useLocation();
    const { selectedHyperpigmentation } = location.state || { selectedHyperpigmentation: [] };
    const [lastResults, setLastResults] = useState([]);

    const auth = getAuth(); // Get the Firebase Auth instance  
    const currentUser = auth.currentUser; // Get the current user  
    const userId = currentUser ? currentUser.uid : null; // Use the user's UID  

    const results = {
        'melasma': {
            name: 'Melasma',
            description: 'Melasma is a common skin condition that causes brown or gray-brown patches on the face. It is often triggered by sun exposure, hormonal changes, or certain medications.',
        },
        'post-inflammatory': {
            name: 'Post Inflammatory Hyperpigmentation',
            description: 'Post inflammatory hyperpigmentation (PIH) is a darkening of the skin that occurs after an injury or inflammation.',
        },
    };

    const handleSave = async () => {
        if (!userId) {
            alert('User not authenticated. Cannot save results.');
            return;
        }

        const assessmentResult = {
            selectedHyperpigmentation,
            timestamp: new Date().toISOString(),
        };

        try {
            await setDoc(doc(db, "users", userId, "hyperpigmentationResults", Date.now().toString()), assessmentResult);
            alert('Results saved successfully!');

        } catch (error) {
            console.error("Error saving results: ", error);
            alert('Error saving results!');
        }
    };

    useEffect(() => {
        const fetchLastResult = async () => {
            if (!userId) return;

            try {
                const resultsQuery = query(
                    collection(db, "users", userId, "hyperpigmentationResults"),
                    orderBy("timestamp", "desc"),
                    limit(1)
                );

                const querySnapshot = await getDocs(resultsQuery);
                const lastResult = querySnapshot.docs.map(doc => doc.data());
                setLastResults(lastResult);
            } catch (error) {
                console.error("Error fetching last results: ", error);
            }
        };

        fetchLastResult();
    }, [userId]);

    return (
        <div className="hyperpigmentation-result-page">
            <div className="hyperpigmentation-result-header">
                <h1>Hyperpigmentation Result</h1>
            </div>
            <div className="result-container2">
                <h2>Based on your selection(s), you have:</h2>
                {selectedHyperpigmentation.length > 0 ? (
                    <ul>
                        {selectedHyperpigmentation.map(type => (
                            <li key={type}>
                                <strong className="hyperpigmentation-type">{results[type].name}</strong>: <span className="hyper-description">{results[type].description}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hyperpigmentation types selected.</p>
                )}

                <div className="user-selections-hyper">
                    <h3>You selected:</h3>
                    <ul>
                        {selectedHyperpigmentation.length > 0 ? (
                            selectedHyperpigmentation.map(type => <li key={type}>{results[type].name}</li>)
                        ) : (
                            <li>No selections made.</li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="action-button-container-hyper">
                <button className="submit-button" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}