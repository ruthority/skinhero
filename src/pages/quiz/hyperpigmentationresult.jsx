import React from 'react';
import { useLocation } from 'react-router-dom';
import '/src/index.css'; // Ensure this path is correct for your project's file structure  

export default function HyperpigmentationResult() {
    const location = useLocation();
    const { selectedHyperpigmentation } = location.state || { selectedHyperpigmentation: [] };

    const results = {
        'melasma': {
            name: 'Melasma',
            description: 'Melasma is a common skin condition that causes brown or gray-brown patches on the face. It is often triggered by sun exposure, hormonal changes, or certain medications.',
        },
        'post-inflammatory': {
            name: 'Post Inflammatory Hyperpigmentation',
            description: 'Post inflammatory hyperpigmentation (PIH) is a darkening of the skin that occurs after an injury or inflammation. It often resolves on its own, but treatments can help speed up the process.',
        },
    };

    return (
        <div className="hyperpigmentation-result-page">
            <div className="hyperpigmentation-result-header">
                <h1 >Hyperpigmentation Result</h1>
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