import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from "../../firebase"; // Adjust the path if necessary  
import '/src/index.css'; // Adjust path as necessary  

export default function SkinTypeSavedResult() {
    const [results, setResults] = useState([]); // Store all results  
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current result index  
    const [loading, setLoading] = useState(true); // Loading state  
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const userId = currentUser ? currentUser.uid : null;

    // Define skin types and their descriptions  
    const skinTypes = {
        'Dry Skin': {
            description: 'Your skin lacks moisture and feels tight. It may also appear flaky or rough.',
        },
        'Combination Skin': {
            description: 'Your skin has both oily and dry areas. It is dry in some regions and oily in the T-zone (forehead, nose, chin).',
        },
        'Normal Skin': {
            description: 'Your skin is generally well-balanced with no significant issues. It feels comfortable and has an even tone.',
        },
        'Oily Skin': {
            description: 'Your skin produces excess oil and may appear shiny. You may also experience larger pores and breakouts.',
        },
        'Unknown Skin Type': {
            description: 'It seems like the answers are not conclusive. Please consult a dermatologist for a proper assessment.',
        },
    };

    useEffect(() => {
        const fetchAllResults = async () => {
            if (userId) {
                setLoading(true); // Start loading  
                try {
                    const resultsRef = collection(db, "users", userId, "skinTypeResults");
                    const resultsQuery = query(resultsRef, orderBy("timestamp", "desc"));
                    const querySnapshot = await getDocs(resultsQuery);

                    const allResults = querySnapshot.docs.map(doc => doc.data());
                    setResults(allResults);
                } catch (error) {
                    console.error("Error fetching results: ", error);
                } finally {
                    setLoading(false); // End loading  
                }
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
        <div className="saved-result-wrapper">
            <div className="st-result-header">
                <h1>Skin Type Results</h1>
            </div>
            <div className="result-container">
                {loading ? (
                    <p>Loading...</p> // Display loading message  
                ) : results.length > 0 ? (
                    <>
                        <h3 className="skin-type">Your Skin Type: {results[currentIndex].skinType}</h3>
                        <p className="description">{skinTypes[results[currentIndex].skinType].description}</p>
                        <p className="user-selections">Your responses: {JSON.stringify(results[currentIndex].responses)}</p>
                        <p><strong>Saved on:</strong> {new Date(results[currentIndex].timestamp).toLocaleString()}</p>

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