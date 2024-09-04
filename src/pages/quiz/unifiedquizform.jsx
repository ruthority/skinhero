import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizAcnePage from '/src/pages/quiz/acne';
import QuizHyperpigmentationPage from '/src/pages/quiz/hyperpigmentation';
import SkinTypeTest from '/src/pages/quiz/skintype';
import '/src/index.css'; // Import your CSS  

const UnifiedQuizForm = () => {
    const [currentStep, setCurrentStep] = useState(0);  // Start at step 0 (Acne Quiz)
    const [selectedAcne, setSelectedAcne] = useState([]);
    const [selectedHyperpigmentation, setSelectedHyperpigmentation] = useState([]);
    const [skinTypeResponses, setSkinTypeResponses] = useState({
        skinFeel: '',
        tissueResidue: '',
        itchyInflamed: '',
        cheeksTight: '',
    });
    const navigate = useNavigate();

    const handleNextStep = () => {
        if (currentStep < 2) {
            setCurrentStep(currentStep + 1);
        } else {
            // Navigate to product recommendations page  
            navigate('/quiz/productrecommendations', {
                state: {
                    selectedAcne,
                    selectedHyperpigmentation,
                    skinTypeResponses,
                },
            });
        }
    };

    return (
        <div className="unified-quiz-form">
            <header className="quiz-header">
                <h1>Skin Condition Assessment</h1>
                <p>Step {currentStep + 1} of 3</p>
            </header>

            {currentStep === 0 && (
                <QuizAcnePage onSelectionChange={setSelectedAcne} showSubmitButton={false} />
            )}
            {currentStep === 1 && (
                <QuizHyperpigmentationPage onSelectionChange={setSelectedHyperpigmentation} showSubmitButton={false} />
            )}
            {currentStep === 2 && (
                <SkinTypeTest onResponsesChange={setSkinTypeResponses} showSubmitButton={false} />
            )}

            <div className="navigation-button">
                <button className="navigation-button" onClick={handleNextStep}>Next</button>
            </div>
        </div>
    );
};

export default UnifiedQuizForm;