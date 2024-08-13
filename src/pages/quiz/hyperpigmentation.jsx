import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate  
import '/src/index.css';

// Import images  
import hyperpigmentationImage from '/src/pih.jpg';
import melasmaImage from '/src/melasma.jpg';

export default function QuizHyperpigmentationPage() {
    const [selectedHyperpigmentation, setSelectedHyperpigmentation] = useState([]);
    const navigate = useNavigate(); // Initialize navigate  

    const hyperpigmentationTypes = [
        { name: 'Post Inflammatory Hyperpigmentation', image: hyperpigmentationImage, id: 'post-inflammatory' },
        { name: 'Melasma', image: melasmaImage, id: 'melasma' },
    ];

    const handleSelect = (id) => {
        if (selectedHyperpigmentation.includes(id)) {
            setSelectedHyperpigmentation(selectedHyperpigmentation.filter(item => item !== id));
        } else {
            setSelectedHyperpigmentation([...selectedHyperpigmentation, id]);
        }
    };

    const handleSubmit = () => {
        // Use navigate to go to the HyperpigmentationResult page  
        navigate('/quiz/hyperpigmentationresult', { state: { selectedHyperpigmentation } });
    };

    return (
        <div className="quiz-hyperpigmentation-page">
            <header className="hyperpigmentation-header">
                <h1 className='hyperpigmentation-title'>Hyperpigmentation</h1>
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
            <button className="hyperpigmentation-submit-button" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}