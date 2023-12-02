import React, {useState} from "react";
import {useLocation} from "react-router";

import InfoComponent from "../components/InfoComponent";
import QuestionComponent from "../components/QuestionComponent";
import StepperComponent from "../components/StepperComponent";

import content from "../content/content";

import "./QuizPage.scss"

function QuizPageFeedback() {
    const location = useLocation();
    const uuid = location.state.uuid;

    let [topicIndex, setTopicIndex] = useState(0);
    let [submittedAnswer, setSubmittedAnswer] = useState(null);
    let [checkedSources, setCheckedSources] = useState(false);
    let [checkedMinigame, setCheckedMinigame] = useState(false);
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

    const getCheckedMinigame = () => {
        return checkedMinigame;
    };

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
                    allowMinigame={true}
                    minigame={content[topicIndex].minigame}
                    checkedMinigame={checkedMinigame}
                    setCheckedMinigame={setCheckedMinigame}
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
                    contentLength={content.length}
                    allowFeedback={true}
                    uuid={uuid}
                />
            </div>
        </div>
    );
}

export default QuizPageFeedback;