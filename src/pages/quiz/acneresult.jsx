import React from 'react';
import { useLocation } from 'react-router-dom';
import '/src/index.css'; // Ensure this path is correct for your project's file structure  

export default function AcneResult() {
    const location = useLocation();
    const { selectedAcne } = location.state || { selectedAcne: [] };

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
                    onClick={() => alert('Results saved!')}
                >
                    Save
                </button>
            </div>
        </div>
    );
}