import React, {useState} from "react";

import InfoComponent from "../components/InfoComponent";
import QuestionComponent from "../components/QuestionComponent";
import StepperComponent from "../components/StepperComponent";

import content from "../content/content";

import "./QuizPage.scss"
import checkQuestion from "../common/checkQuestion";

function QuizPageFeedback() {
    let [topicIndex, setTopicIndex] = useState(0);
    let [submittedAnswer, setSubmittedAnswer] = useState(null);
    let [checkedSources, setCheckedSources] = useState(false);
    let [areAnswersCorrect, setAreAnswersCorrect] = useState(new Array(content.length).fill(null));

    const getSubmittedAnswer = () => {
        return submittedAnswer;
    };

    const getTopicIndex = () => {
        return topicIndex;
    };

    const getCheckedSources = () => {
        return checkedSources;
    };

    console.log(`topicIndex: ${topicIndex}`);
    console.log(`submittedAnswer: ${submittedAnswer}`);
    console.log(`checkedSources: ${checkedSources}`);

    return (
        <div className="container">
            <div className="InfoSide">
                <StepperComponent steps={areAnswersCorrect} />
                <InfoComponent
                    field={`Frage ${topicIndex + 1}/${content.length}: ${content[topicIndex].category}`}
                    topic={content[topicIndex].topic}
                    topicParagraph={content[topicIndex].paragraph}
                    topicSources={content[topicIndex].sources}
                    checkedSources={checkedSources}
                    setCheckedSources={setCheckedSources}
                />
            </div>
            <div className="QuestionSide">
                <QuestionComponent
                    question={content[topicIndex].question}
                    answerOptions={content[topicIndex].answers}
                    correctAnswer={content[topicIndex].correctAnswer}
                    selectedAnswer={submittedAnswer}
                    setSelectedAnswer={setSubmittedAnswer}
                    topicIndex={topicIndex}
                    setTopicIndex={setTopicIndex}
                    areAnswersCorrect={areAnswersCorrect}
                    setAreAnswersCorrect={setAreAnswersCorrect}
                    showFeedback={true}
                />
            </div>
        </div>
    );
}

export default QuizPageFeedback;