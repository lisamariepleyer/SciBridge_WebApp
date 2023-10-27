import React, {useEffect, useState} from "react";
import "./QuestionComponent.scss";
import "../styles/radiooptions.scss";

const QuestionComponent = ({ question, answerOptions, selectedAnswer, setSelectedAnswer, topicIndex, setTopicIndex }) => {
    const [selectedRadioOption, setSelectedRadioOption] = useState(null);
    let isCorrect = false;

    useEffect(() => {
        setSelectedAnswer(null);
    }, [ question, answerOptions ]);

    function handleAnswerSubmission() {
        setSelectedAnswer(selectedRadioOption);
        setTopicIndex(topicIndex + 1);
        setSelectedRadioOption(null);
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
                {selectedRadioOption && <button
                    className="question-submit-button"
                    onClick={() => handleAnswerSubmission()}
                >
                    Senden
                </button>}
            </div>
        </div>
    );
};

export default QuestionComponent;