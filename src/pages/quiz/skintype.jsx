
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/index.css'; // Adjust path as necessary  

const SkinTypeTest = ({ showSubmitButton = true, onResponsesChange }) => {
    const navigate = useNavigate();
    const [responses, setResponses] = useState({
        skinFeel: '',
        tissueResidue: '',
        itchyInflamed: '',
        cheeksTight: '',
    });

    const handleChange = (question, answer) => {
        const updatedResponses = {
            ...responses,
            [question]: answer,
        };
        setResponses(updatedResponses);
        onResponsesChange(updatedResponses);  // Update parent component state
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/quiz/skintyperesult', { state: { responses } });
    };

    return (
        <div className="skin-test-container">
            <div className="custom-header-st">
                <h1>Skin Type Test</h1>
            </div>
            <p><b>Follow these steps to determine your skin type.</b></p>
            <ul>
                <li className='number-item'> 1. Cleanse skin with a gentle cleanser & wait 1 hour</li>
                <li className='number-item'>2. Blot Skin with Tissue</li>
            </ul>

            <form onSubmit={handleSubmit}>
                <h3>How does your skin feel?</h3>
                <div className="button-group">
                    <button
                        type="button"
                        onClick={() => handleChange('skinFeel', 'comfortable')}
                        className={`response-button ${responses.skinFeel === 'comfortable' ? 'selected' : ''}`}
                    >
                        Comfortable
                    </button>
                    <button
                        type="button"
                        onClick={() => handleChange('skinFeel', 'tight')}
                        className={`response-button ${responses.skinFeel === 'tight' ? 'selected' : ''}`}
                    >
                        Tight
                    </button>
                </div>

                <h3>Is there residue on the tissue?</h3>
                <div className="button-group">
                    <button
                        type="button"
                        onClick={() => handleChange('tissueResidue', 'yes')}
                        className={`response-button ${responses.tissueResidue === 'yes' ? 'selected' : ''}`}
                    >
                        Yes
                    </button>
                    <button
                        type="button"
                        onClick={() => handleChange('tissueResidue', 'no')}
                        className={`response-button ${responses.tissueResidue === 'no' ? 'selected' : ''}`}
                    >
                        No
                    </button>
                </div>

                <h3>Is your skin itchy and inflamed?</h3>
                <div className="button-group">
                    <button
                        type="button"
                        onClick={() => handleChange('itchyInflamed', 'yes')}
                        className={`response-button ${responses.itchyInflamed === 'yes' ? 'selected' : ''}`}
                    >
                        Yes
                    </button>
                    <button
                        type="button"
                        onClick={() => handleChange('itchyInflamed', 'no')}
                        className={`response-button ${responses.itchyInflamed === 'no' ? 'selected' : ''}`}
                    >
                        No
                    </button>
                </div>

                <h3>Do your cheeks feel tight?</h3>
                <div className="button-group">
                    <button
                        type="button"
                        onClick={() => handleChange('cheeksTight', 'yes')}
                        className={`response-button ${responses.cheeksTight === 'yes' ? 'selected' : ''}`}
                    >
                        Yes
                    </button>
                    <button
                        type="button"
                        onClick={() => handleChange('cheeksTight', 'no')}
                        className={`response-button ${responses.cheeksTight === 'no' ? 'selected' : ''}`}
                    >
                        No
                    </button>
                </div>

                <div className="submit-button-container">
                    {showSubmitButton && (
                        <button type="submit" className="submit-button-st">Submit</button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default SkinTypeTest;