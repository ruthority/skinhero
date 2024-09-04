import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate  
import '/src/index.css';

// Import images  
import hyperpigmentationImage from '/src/pih.jpg';
import melasmaImage from '/src/melasma.jpg';

const QuizHyperpigmentationPage = ({ showSubmitButton = true, onSelectionChange }) => {
    const [selectedHyperpigmentation, setSelectedHyperpigmentation] = useState([]);
    const navigate = useNavigate(); // Initialize navigate  

    const hyperpigmentationTypes = [
        { name: 'Post Inflammatory Hyperpigmentation', image: hyperpigmentationImage, id: 'post-inflammatory' },
        { name: 'Melasma', image: melasmaImage, id: 'melasma' },
    ];

    const handleSelect = (id) => {
        const newSelection = selectedHyperpigmentation.includes(id)
            ? selectedHyperpigmentation.filter(item => item !== id)
            : [...selectedHyperpigmentation, id];

        setSelectedHyperpigmentation(newSelection);
        if (onSelectionChange) {
            onSelectionChange(newSelection);
        }
    };

    const handleSubmit = () => {
        // Use navigate to go to the HyperpigmentationResult page  
        navigate('/quiz/hyperpigmentationresult', { state: { selectedHyperpigmentation } });
    };

    return (
        <div className="quiz-hyperpigmentation-page">
            <header className="hyperpigmentation-header">
                <h1 className='hyperpigmentation-title'>Hyperpigmentation Quiz</h1>
            </header>

            <p className="select-text">Select all that apply:</p>
            <div className="hyperpigmentation-selection">
                {hyperpigmentationTypes.map(item => (
                    <div
                        key={item.id}
                        className={`hyperpigmentation-item ${selectedHyperpigmentation.includes(item.id) ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${item.image})` }}
                        onClick={() => handleSelect(item.id)} // Make each image clickable  
                    >
                        <span className="hyperpigmentation-label">{item.name}</span>
                    </div>
                ))}
            </div>

            {/* Conditionally render the submit button */}
            {showSubmitButton ? (
                <button className="hyperpigmentation-submit-button" onClick={handleSubmit}>
                    Submit
                </button>
            ) : null}
        </div>
    );
};

export default QuizHyperpigmentationPage;