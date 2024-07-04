import React, { useState } from 'react';
import { Group, Space, Text, useMantineTheme } from '@mantine/core';

const QuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const questions = [
        {
            question: 'Question 1',
            options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
            correctAnswer: 0,
        },
        {
            question: 'Question 2',
            options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
            correctAnswer: 1,
        },
        // Add more questions here
    ];

    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Quiz completed, show the score or redirect to another page
            // You can customize this part based on your requirements
            alert(`Quiz completed! Your score is ${score}/${questions.length}`);
        }
    };

    return (
        <div>
            <h1>Quiz Page</h1>
            {currentQuestion < questions.length && (
                <div>
                    <h2>{questions[currentQuestion].question}</h2>
                    <ul>
                        {questions[currentQuestion].options.map((option, index) => (
                            <li key={index} onClick={() => handleAnswer(index)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default QuizPage;
