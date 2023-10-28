import React, {useState} from "react";

import InfoComponent from "../components/InfoComponent";
import QuestionComponent from "../components/QuestionComponent";

import content from "../content/content";

import "./QuizPage.scss"

function QuizPagePlain() {
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

    //console.log(`You reached ${topicIndex} out of ${content.length} questions`)
    //console.log(areAnswersCorrect);
    //console.log(`topicIndex: ${topicIndex}`);
    //console.log(`submittedAnswer: ${submittedAnswer}`);
    //console.log(`checkedSources: ${checkedSources}`);

    return (
        <div className="container">
            <div className="InfoSide">
                <InfoComponent
                    field={`Frage ${topicIndex + 1}: ${content[topicIndex].category}`}
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
                    contentLength={content.length}
                    showFeedback={false}
                />
            </div>
        </div>
    );
}

export default QuizPagePlain;