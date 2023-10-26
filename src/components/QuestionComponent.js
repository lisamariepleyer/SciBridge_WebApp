import React, {useState} from "react";
import "./QuestionComponent.scss";
import "../styles/radiooptions.scss";

const QuestionComponent = ({ question, answerOptions, correctAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null);

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
                            onChange={() => setSelectedOption(option)}
                        />
                        <label htmlFor={`option-${index}`}>{option}</label>
                    </div>
                ))}
                {selectedOption && <button className="question-submit-button">Submit</button>}
            </div>
        </div>
    );
};

export default QuestionComponent;