import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/index.css';

// Import images  
import whiteheads from '/src/whiteheads2.jpg';
import blackheads from '/src/blackheads.jpg';
import papules from '/src/papules.jpg';
import pustule from '/src/pustule.jpg';
import nodules from '/src/nodules.jpg';
import cystic from '/src/cystic.jpg';

const QuizAcnePage = ({ showSubmitButton = true, onSelectionChange }) => {
    const [selectedAcne, setSelectedAcne] = useState([]);
    const navigate = useNavigate();

    const acneTypes = [
        { name: 'Whiteheads', image: whiteheads, id: 'whiteheads' },
        { name: 'Blackheads', image: blackheads, id: 'blackheads' },
        { name: 'Papules', image: papules, id: 'papules' },
        { name: 'Pustules', image: pustule, id: 'pustules' },
        { name: 'Nodules', image: nodules, id: 'nodules' },
        { name: 'Cystic Acne', image: cystic, id: 'cystic' },
    ];

    const handleSelect = (id) => {
        const newSelection = selectedAcne.includes(id)
            ? selectedAcne.filter(acne => acne !== id)
            : [...selectedAcne, id];

        setSelectedAcne(newSelection);
        if (onSelectionChange) {
            onSelectionChange(newSelection);
        }
    };

    const handleSubmit = () => {
        navigate('/quiz/acneresult', { state: { selectedAcne } });
    };

    return (
        <div className="quiz-acne-page">
            <header className="acne-header">
                <h1 className='acne-title'>Acne Assessment</h1>
            </header>

            <p className="select-text">Select all that apply:</p>
            <div className="acne-selection">
                {acneTypes.map(acne => (
                    <div
                        key={acne.id}
                        className={`acne-item ${selectedAcne.includes(acne.id) ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${acne.image})` }}
                        onClick={() => handleSelect(acne.id)}
                    >
                        <span className="acne-label">{acne.name}</span>
                    </div>
                ))}
            </div>

            {/* Conditionally render the submit button */}
            {showSubmitButton && (
                <button className="submit-button" onClick={handleSubmit}>
                    Submit
                </button>
            )}
        </div>
    );
};

export default QuizAcnePage;