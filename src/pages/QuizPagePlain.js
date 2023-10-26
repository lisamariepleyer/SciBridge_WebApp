import React from "react";
import InfoComponent from "../components/InfoComponent";
import QuestionComponent from "../components/QuestionComponent";
import "./QuizPage.scss"

function QuizPagePlain() {
    return (
        <div className="container">
            <div className="InfoSide">
                <InfoComponent
                    field={"Biology"}
                    topic={"Scientific Topic"}
                    topicParagraph={"Topic Info."}
                    topicSources={"Source 1, Source 2"}
                />
            </div>
            <div className="QuestionSide">
                <QuestionComponent
                    question={"This is where the question will go?"}
                    answerOptions={['Option 1', 'Option 2', 'Option 3 is a reeeeeaaaallllllyyyyyyyyyyyyy long one ']}
                />
            </div>
        </div>
    );
}

export default QuizPagePlain;