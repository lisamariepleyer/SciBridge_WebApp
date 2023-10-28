import React, {useEffect, useState} from "react";
import "./QuestionComponent.scss";
import "../styles/radiooptions.scss";
import checkQuestion from "../common/checkQuestion";
import {useNavigate} from "react-router-dom";

const QuestionComponent = ({ question, answerOptions, correctAnswer, selectedAnswer, setSelectedAnswer, topicIndex, setTopicIndex, areAnswersCorrect, setAreAnswersCorrect, contentLength, showFeedback }) => {
    const [selectedRadioOption, setSelectedRadioOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    let navigation = useNavigate();

    useEffect(() => {
        setSelectedAnswer(null);
        setIsCorrect(null);
        setIsSubmitted(null);
    }, [ question, answerOptions ]);

    function handleAnswerSubmission() {
        const correct = checkQuestion(selectedRadioOption, answerOptions[correctAnswer]);
        setIsCorrect(correct);

        areAnswersCorrect[topicIndex] = correct;
        setAreAnswersCorrect(areAnswersCorrect);

        if(!isSubmitted && showFeedback) {
            setIsSubmitted(true);
        } else {
            setSelectedAnswer(selectedRadioOption);
            handleContentLength();
            setSelectedRadioOption(null);
        }
    }

    function handleContentLength() {
        console.log(topicIndex);
        if (topicIndex === contentLength-1) {
            navigation(
                '/questionnaire', {
                    state: {
                        name: "hi",
                        areAnswersCorrect: areAnswersCorrect.toString()
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