import React, { useEffect, useState } from 'react';
import { db } from "../../firebase"; // Import Firestore instance  
import { getAuth } from 'firebase/auth'; // Import Firebase Auth  
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import '/src/index.css'; // Ensure this path is correct for your project's file structure  

export default function HyperpigmentationSavedResult() {
    const [results, setResults] = useState([]); // Store all results  
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current result index  
    const [loading, setLoading] = useState(true); // Loading state  
    const auth = getAuth(); // Get the Firebase Auth instance  
    const currentUser = auth.currentUser; // Get the current user  
    const userId = currentUser ? currentUser.uid : null; // Use the user's UID  

    // Define the hyperpigmentation types and their descriptions  
    const hyperpigmentationTypes = {
        'melasma': {
            name: 'Melasma',
            description: 'Melasma is a common skin condition that causes brown or gray-brown patches on the face. It is often triggered by sun exposure, hormonal changes, or certain medications.',
        },
        'post-inflammatory': {
            name: 'Post Inflammatory Hyperpigmentation',
            description: 'Post inflammatory hyperpigmentation (PIH) is a darkening of the skin that occurs after an injury or inflammation. It often resolves on its own, but treatments can help speed up the process.',
        },
    };

    useEffect(() => {
        const fetchAllResults = async () => {
            if (!userId) return; // Exit if userId is not available  
            setLoading(true); // Set loading to true before fetching  

            try {
                const resultsQuery = query(
                    collection(db, "users", userId, "hyperpigmentationResults"),
                    orderBy("timestamp", "desc")
                );

                const querySnapshot = await getDocs(resultsQuery);
                const allResults = querySnapshot.docs.map(doc => doc.data());
                setResults(allResults);
            } catch (error) {
                console.error("Error fetching results: ", error);
            } finally {
                setLoading(false); // Set loading to false after fetching  
            }
        };

        fetchAllResults();
    }, [userId]);

    const handleNext = () => {
        if (currentIndex < results.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="hyperpigmentation-saved-result-page">
            <div className="acne-result-header">
                <h1>Hyperpigmentation Results</h1>
            </div>
            <div className="acne-result-container">
                {loading ? ( // Loading state check  
                    <p>Loading...</p>
                ) : results.length > 0 ? (
                    <>
                        <h2>Based on your last selection(s), you have:</h2>
                        <ul>
                            {results[currentIndex].selectedHyperpigmentation.map(type => (
                                <li key={type}>
                                    <strong className="hyperpigmentation-type">{hyperpigmentationTypes[type].name}</strong>:
                                    <span className="hyper-description"> {hyperpigmentationTypes[type].description}</span>
                                </li>
                            ))}
                        </ul>
                        <li><strong>Saved on:</strong> {new Date(results[currentIndex].timestamp).toLocaleString()}</li>

                        <div className="navigation-buttons">
                            <button onClick={handlePrevious} disabled={currentIndex === 0}>Next</button>
                            <button onClick={handleNext} disabled={currentIndex === results.length - 1}>Previous</button>
                        </div>
                    </>
                ) : (
                    <p>No saved results found.</p>
                )}
            </div>
        </div>
    );
}