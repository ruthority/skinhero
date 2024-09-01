
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from "../../firebase"; // Import Firestore instance
import '/src/index.css'; // Ensure this path is correct for your project's file structure

// Import images  
import whiteheads from '/src/whiteheads2.jpg';
import blackheads from '/src/blackheads.jpg';
import papules from '/src/papules.jpg';
import pustule from '/src/pustule.jpg';
import nodules from '/src/nodules.jpg';
import cystic from '/src/cystic.jpg';

export default function QuizAcnePage() {
    const [selectedAcne, setSelectedAcne] = useState([]);
    const navigate = useNavigate();
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const userId = currentUser ? currentUser.uid : null;

    const acneTypes = [
        { name: 'Whiteheads', image: whiteheads, id: 'whiteheads' },
        { name: 'Blackheads', image: blackheads, id: 'blackheads' },
        { name: 'Papules', image: papules, id: 'papules' },
        { name: 'Pustules', image: pustule, id: 'pustules' },
        { name: 'Nodules', image: nodules, id: 'nodules' },
        { name: 'Cystic Acne', image: cystic, id: 'cystic' },
    ];

    const handleSelect = (id) => {
        if (selectedAcne.includes(id)) {
            setSelectedAcne(selectedAcne.filter(acne => acne !== id));
        } else {
            setSelectedAcne([...selectedAcne, id]);
        }
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

    const handleSubmit = () => {
        // Navigate to /quiz/acneresult and pass selected acne types in state  
        navigate('/quiz/acneresult', { state: { selectedAcne } });
    };

    return (
        <div className="quiz-acne-page">
            <header className="custom-header">
                <h1 className='acne-title'>Acne Assessment</h1>
            </header>

            <p className="select-text">Select all that apply:</p>
            <div className="acne-selection">
                {acneTypes.map(acne => (
                    <div
                        key={acne.id}
                        className={`acne-item ${selectedAcne.includes(acne.id) ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${acne.image})` }}
                        onClick={() => handleSelect(acne.id)} // Make each image clickable  
                    >
                        <span className="acne-label">{acne.name}</span>
                    </div>
                ))}
            </div>
            {selectedAcne.length > 0 && (
                <div className="result-container">
                    <h2>Your Selected Acne Types:</h2>
                    <ul>
                        {selectedAcne.map(type => (
                            <li key={type}>{acneTypes.find(acne => acne.id === type).name}</li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="action-button-container">
                <button className="submit-button" onClick={handleSubmit}>
                    Submit
                </button>
                <button className="submit-button" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
}