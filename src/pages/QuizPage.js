import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {useNavigate} from "react-router-dom";

import InfoComponent from "../components/InfoComponent";
import QuestionComponent from "../components/QuestionComponent";
import StepperComponent from "../components/StepperComponent";

import content from "../content/content";

import "./QuizPage.scss"

function QuizPage() {
    const location = useLocation();
    const navigation = useNavigate()
    const style = location.state.style;
    const uuid = location.state.uuid;

    let [topicIndex, setTopicIndex] = useState(0);
    let [checkedSources, setCheckedSources] = useState(false);
    let [checkedMinigame, setCheckedMinigame] = useState(false);
    let [areAnswersCorrect, setAreAnswersCorrect] = useState(new Array(content.length).fill(null));
    let [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        // handle back button to exit quiz
        window.addEventListener('popstate', (e) => {
            console.log("popstate")
            navigation("/")
        })

        // handle refreshing page
        const handleBeforeUnload = (e) => {
            const message = "Möchtest du das Quiz wirklich verlassen?";
            e.preventDefault();
            e.returnValue = message;
            localStorage.setItem('refreshing', 'true');
            return message;
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            localStorage.removeItem('refreshing');
        };
    }, [navigation]);

    const addQuestionToDB = (isCorrect, hasViewedSource, hasViewedGame) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                qui: (topicIndex + 1).toString().padStart(2, '0') + "-" + uuid,
                uid: uuid,
                timestamp: new Date().toISOString(),
                question: topicIndex + 1,
                isCorrect: isCorrect,
                hasViewedSource: hasViewedSource,
                hasViewedGame: hasViewedGame
            })
        };

        fetch(process.env.REACT_APP_HOST_URL + "question/", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data.uid, 'with question', data.question);
            })
            .catch(error => {
                console.error('Error: ', error);
            });
    };

    if (hasSubmitted) {
        addQuestionToDB(areAnswersCorrect.at(topicIndex), checkedSources, checkedMinigame);
        setHasSubmitted(false);
    }

    return (
        <div className="container">
            <div className="InfoSide">
                {style === "feedback" &&
                    <StepperComponent
                        steps={areAnswersCorrect}
                        setSteps={setAreAnswersCorrect}
                    />
                }
                <InfoComponent
                    field={style === "feedback"
                        ? `Frage ${topicIndex + 1}/${content.length}: ${content[topicIndex].category}`
                        : `Frage ${topicIndex + 1}: ${content[topicIndex].category}`
                    }
                    topic={content[topicIndex].topic}
                    topicParagraph={content[topicIndex].paragraph}
                    topicSources={content[topicIndex].sources}
                    checkedSources={checkedSources}
                    setCheckedSources={setCheckedSources}
                    allowMinigame={style === "feedback"}
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
                    topicIndex={topicIndex}
                    setTopicIndex={setTopicIndex}
                    areAnswersCorrect={areAnswersCorrect}
                    setAreAnswersCorrect={setAreAnswersCorrect}
                    contentLength={content.length}
                    allowFeedback={style === "feedback"}
                    hasSubmitted={hasSubmitted}
                    setHasSubmitted={setHasSubmitted}
                    uuid={uuid}
                />
            </div>
        </div>
    );
}

export default QuizPage;