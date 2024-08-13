import React from 'react';
import { useLocation } from 'react-router-dom';
import '/src/index.css'; // Adjust path as necessary  

const SkinTypeResult = () => {
    const location = useLocation();
    const { responses } = location.state || { responses: {} }; // Handle possible undefined state  
    let skinType;
    let description = '';

    const { skinFeel, tissueResidue, itchyInflamed, cheeksTight } = responses;

    // Determine skin type based on responses  
    if (skinFeel === 'tight' && tissueResidue === 'no' && itchyInflamed === 'no' && cheeksTight === 'no') {
        skinType = 'Dry Skin';
        description = 'Your skin lacks moisture and feels tight. It may also appear flaky or rough.';
    } else if (skinFeel === 'tight' && tissueResidue === 'yes' && (itchyInflamed === 'yes' || cheeksTight === 'yes')) {
        skinType = 'Combination Skin';
        description = 'Your skin has both oily and dry areas. It is dry in some regions and oily in the T-zone (forehead, nose, chin).';
    } else if (skinFeel === 'tight' && tissueResidue === 'no' && (itchyInflamed === 'yes' || cheeksTight === 'yes')) {
        skinType = 'Normal Skin';
        description = 'Your skin is generally well-balanced with no significant issues. It feels comfortable and has an even tone.';
    } else if (skinFeel === 'oily' || tissueResidue === 'yes' || itchyInflamed === 'yes' || cheeksTight === 'yes') {
        skinType = 'Oily Skin';
        description = 'Your skin produces excess oil and may appear shiny. You may also experience larger pores and breakouts.';
    } else {
        skinType = 'Unknown Skin Type';
        description = 'It seems like the answers are not conclusive. Please consult a dermatologist for a proper assessment.';
    }

    // Create a string displaying selected options  
    const selectedOptions = `  
        Skin Feel: ${skinFeel},   
        Tissue Residue: ${tissueResidue},   
        Itchy/Inflamed: ${itchyInflamed},   
        Cheeks Tight: ${cheeksTight}  
    `;

    return (
        <div className="result-wrapper">
            <div className="st-result-header">
                <h1>Skin Type Result</h1>
            </div>
            <div className="result-container">
                <h3 className="skin-type">Based on your selections, your skin type is : {skinType}</h3>
                <p className="description">{description}</p>
                <p className="user-selections">You selected: {selectedOptions}</p>
            </div>
            <div className="action-button-container">
                <button className="submit-button" onClick={() => alert('Saved result!')}>Save </button>
            </div>
        </div>
    );
};

export default SkinTypeResult;