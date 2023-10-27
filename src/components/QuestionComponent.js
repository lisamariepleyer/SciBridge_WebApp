import React, {useEffect, useState} from "react";
import "./QuestionComponent.scss";
import "../styles/radiooptions.scss";
import checkQuestion from "../common/checkQuestion";

const QuestionComponent = ({ question, answerOptions, correctAnswer, selectedAnswer, setSelectedAnswer, topicIndex, setTopicIndex, showFeedback }) => {
    const [selectedRadioOption, setSelectedRadioOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setSelectedAnswer(null);
        setIsCorrect(null);
        setIsSubmitted(null);
    }, [ question, answerOptions ]);

    function handleAnswerSubmission() {
        if(!isSubmitted && showFeedback) {
            setIsCorrect(checkQuestion(selectedRadioOption, answerOptions[correctAnswer]));
            setIsSubmitted(true);
        } else {
            setSelectedAnswer(selectedRadioOption);
            setTopicIndex(topicIndex + 1);
            setSelectedRadioOption(null);
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
                        />
                        <label htmlFor={`option-${index}`}>{option}</label>
                    </div>
                ))}
                {selectedRadioOption &&
                    <button
                        className={`question-submit-button ${isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : ''}`}
                        onClick={() => handleAnswerSubmission()}
                    >
                        {isSubmitted ? (isCorrect ? 'Correct ' : 'Incorrect ') : 'Senden'}
                    </button>}
            </div>
        </div>
    );
};

export default QuestionComponent;