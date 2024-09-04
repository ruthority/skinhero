import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation and useNavigate   
import { getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from "../../firebase"; // Adjust the path if necessary  
import '/src/index.css'; // Adjust path as necessary  

const SkinTypeResult = () => {
    const navigate = useNavigate(); // Initialize navigate   
    const location = useLocation(); // Get location  
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const userId = currentUser ? currentUser.uid : null;

    const { responses, selectedHyperpigmentation, selectedAcne } = location.state || { responses: {}, selectedHyperpigmentation: [], selectedAcne: [] }; // Handle possible undefined state  
    let skinType = '';
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

    const handleSave = async () => {
        if (!userId) {
            alert('User not authenticated. Cannot save results.');
            return;
        }

        const skinTypeResult = {
            skinType,
            responses,
            timestamp: new Date().toISOString(),
        };

        try {
            await setDoc(doc(db, "users", userId, "skinTypeResults", Date.now().toString()), skinTypeResult);
            alert('Results saved successfully!');


        } catch (error) {
            console.error("Error saving results: ", error);
            alert('Error saving results!');
        }
    };

    return (
        <div className="result-wrapper">
            <div className="acne-result-header">
                <h1>Skin Type Result</h1>
            </div>
            <div className="acne-result-container">
                <h3 className="skin-type">Based on your selections, your skin type is: {skinType}</h3>
                <p className="description">{description}</p>
                <p className="user-selections">You selected: {JSON.stringify(responses)}</p>
            </div>
            <div className="action-button-container">
                <button className="submit-button" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default SkinTypeResult;