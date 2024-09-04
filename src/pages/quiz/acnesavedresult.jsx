import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from "../../firebase"; // Path to your Firebase configuration  
import '/src/index.css'; // Your CSS path  

export default function AcneSavedResult() {
    const [results, setResults] = useState([]); // Store the results  
    const [currentIndex, setCurrentIndex] = useState(0); // Index for navigation  
    const [loading, setLoading] = useState(true); // Loading state  
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const userId = currentUser ? currentUser.uid : null;  // Use the user's UID  

    // Define the acne types and their descriptions  
    const acneTypes = {
        'whiteheads': {
            name: 'Whiteheads',
            description: 'Whiteheads are closed clogged pores that appear as small, white bumps on the skin. They often occur due to excess oil and dead skin cells clogging pores.',
        },
        'blackheads': {
            name: 'Blackheads',
            description: 'Blackheads are open clogged pores that appear as small black spots on the skin. They form when a pore is partially clogged with oil and dead skin.',
        },
        'papules': {
            name: 'Papules',
            description: 'Papules are small red or pink bumps on the skin that can be tender to the touch. They occur when hair follicles become inflamed or infected.',
        },
        'pustules': {
            name: 'Pustules',
            description: 'Pustules are similar to papules but contain pus. They are often red at the base and can be found on the face, back, and other areas.',
        },
        'nodules': {
            name: 'Nodules',
            description: 'Nodules are large, painful lumps that form deep within the skin. They can be hard to the touch and may take a long time to heal.',
        },
        'cystic': {
            name: 'Cystic Acne',
            description: 'Cystic acne is a severe form of acne that is characterized by painful, fluid-filled cysts. It requires medical treatment to manage.',
        },
    };

    useEffect(() => {
        const fetchAllResults = async () => {
            if (!userId) return; // Exit if no user ID  

            setLoading(true); // Start loading  
            try {
                const resultsRef = collection(db, "users", userId, "acneResults");
                const resultsQuery = query(resultsRef, orderBy("timestamp", "desc"));
                const querySnapshot = await getDocs(resultsQuery);
                const allResults = querySnapshot.docs.map(doc => doc.data());
                setResults(allResults);
            } catch (error) {
                console.error("Error fetching results: ", error);
            } finally {
                setLoading(false); // End loading  
            }
        };
        fetchAllResults();
    }, [userId]); // Dependency on userId  

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
        <div className="acne-result-page">
            <div className="acne-result-header">
                <h1>Acne Assessment Results</h1>
            </div>
            <div className="acne-result-container">
                {loading ? ( // Conditional rendering based on loading state  
                    <p>Loading...</p>
                ) : results.length > 0 ? (
                    <div>
                        <h2>Selected Acne Types:</h2>
                        <ul>
                            {results[currentIndex].selectedAcne.map(type => (
                                <li key={type}>
                                    <strong>{acneTypes[type].name}:</strong> {acneTypes[type].description}
                                </li>
                            ))}
                        </ul>
                        <li><strong>Saved on:</strong> {new Date(results[currentIndex].timestamp).toLocaleString()}</li>

                        <div className="navigation-buttons">
                            <button onClick={handlePrevious} disabled={currentIndex === 0}>Next</button>
                            <button onClick={handleNext} disabled={currentIndex === results.length - 1}>Previous</button>
                        </div>
                    </div>
                ) : (
                    <p>No saved results found.</p>
                )}
            </div>
        </div>
    );
}  