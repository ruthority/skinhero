import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from "../../firebase"; // Import Firestore instance  
import { doc, setDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import Firebase Auth  
import '/src/index.css'; // Ensure this path is correct for your project's file structure  

export default function AcneResult() {
    const location = useLocation();
    const { selectedAcne } = location.state || { selectedAcne: [] };
    const [lastResults, setLastResults] = useState([]);

    const auth = getAuth(); // Get the Firebase Auth instance  
    const currentUser = auth.currentUser; // Get the current user  
    const userId = currentUser ? currentUser.uid : null; // Use the user's UID  

    const results = {
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

    const handleSave = async () => {
        if (!userId) {
            alert('User not authenticated. Cannot save results.');
            return;
        }

        const assessmentResult = {
            selectedAcne,
            timestamp: new Date().toISOString(),
        };

        try {
            // Save the result in Firestore under the user's document  
            await setDoc(doc(db, "users", userId, "acneResults", Date.now().toString()), assessmentResult);
            alert('Results saved successfully!');
        } catch (error) {
            console.error("Error saving results: ", error);
            alert('Error saving results!');
        }
    };

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
                const lastResult = querySnapshot.docs.map(doc => doc.data());
                setLastResults(lastResult);
            } catch (error) {
                console.error("Error fetching last results: ", error);
            }
        };

        fetchLastResult();
    }, [userId]);

    return (
        <div className="acne-result-page">
            <div className="acne-result-header">
                <h1>Acne Assessment Result</h1>
            </div>
            <div className="acne-result-container">
                <h2>Based on your selection(s), you have:</h2>
                {selectedAcne.length > 0 ? (
                    <ul>
                        {selectedAcne.map(type => (
                            <li key={type}>
                                <strong className="acne-type">{results[type].name}</strong>: <span className="acne-description">{results[type].description}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No acne types selected.</p>
                )}

                <div className="user-selections-acne">
                    <h3>You selected:</h3>
                    <ul>
                        {selectedAcne.length > 0 ? (
                            selectedAcne.map(type => <li key={type}>{results[type].name}</li>)
                        ) : (
                            <li>No selections made.</li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="action-button-container-acne">
                <button
                    className="submit-button"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>

            {/* Show Last Saved Results only if there are results */}
            {lastResults.length > 0 && (
                <div className="last-results-section" style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9', text: 'black' }}>
                    <h2>Last Saved Results:</h2>
                    <ul>
                        {lastResults.map((result, index) => (
                            <li key={index}>
                                <strong>Selected Acne Types:</strong> {result.selectedAcne.join(', ')}
                                <br />
                                <strong>Saved on:</strong> {new Date(result.timestamp).toLocaleString()}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}