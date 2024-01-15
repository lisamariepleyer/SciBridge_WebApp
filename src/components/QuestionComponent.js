import React, {useEffect, useState} from "react";
import "./QuestionComponent.scss";
import "../styles/radiooptions.scss";
import {useNavigate} from "react-router-dom";

const QuestionComponent = ({ question, answerOptions, correctAnswer, topicIndex, setTopicIndex, areAnswersCorrect, setAreAnswersCorrect, contentLength, allowFeedback, hasSubmitted, setHasSubmitted, uuid }) => {
    const [selectedRadioOption, setSelectedRadioOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [showCorrectnessInButton, setShowCorrectnessInButton] = useState(false);

    let navigation = useNavigate();

    useEffect(() => {
        setSelectedRadioOption(null);
        setIsCorrect(null);
        setShowCorrectnessInButton(false);
    }, [ question, answerOptions ]);

    async function handleAnswerSubmission() {
        const correct = checkIsCorrect(selectedRadioOption, answerOptions[correctAnswer]);
        setIsCorrect(correct);

        areAnswersCorrect[topicIndex] = correct;
        setAreAnswersCorrect(areAnswersCorrect);

        if (allowFeedback) {
            setShowCorrectnessInButton(true);
        }
        setHasSubmitted(true);

        if (allowFeedback) {
            await delay(2000);
        } else {
            await delay(0);
        }

        handleEndOfContent();
    }

    function checkIsCorrect(selectedAnswer, correctAnswer) {
        return selectedAnswer === correctAnswer;
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));

    function handleEndOfContent() {
        if (topicIndex === contentLength-1) {
            navigation(
                '/questionnaire', {
                    state: {
                        areAnswersCorrect: areAnswersCorrect,
                        uuid: uuid
                    }});
        } else {
            setTopicIndex(topicIndex + 1);
        }
    }

    return (
        <div className="QuestionComponent">
            <div className="question">{question}</div>
            <div className="answers">
                {answerOptions.map((option, index) => (
                    <div className="radio-option" key={index}>
                        <input
                            type="radio"
                            id={`option-${index}`}
                            name="options"
                            value={option}
                            checked={selectedRadioOption === option}
                            onChange={() => setSelectedRadioOption(option)}
                            disabled={showCorrectnessInButton}
                        />
                        <label htmlFor={`option-${index}`}>{option}</label>
                    </div>
                ))}
                {selectedRadioOption &&
                    <button
                        className={`question-submit-button ${
                            showCorrectnessInButton
                                ? (isCorrect === true
                                    ? 'correct' 
                                    : isCorrect === false 
                                    ? 'incorrect' 
                                    : '')
                                : ''}`}
                        onClick={() => handleAnswerSubmission()}
                    >
                        {showCorrectnessInButton
                            ? (isCorrect
                                ? 'Richtig ✓'
                                : 'Falsch ✗')
                            : 'Senden'}
                    </button>}
            </div>
        </div>
    );
};

export default QuestionComponent;