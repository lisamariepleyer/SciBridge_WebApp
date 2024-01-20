import React, {useState, useEffect} from "react";
import "./InfoComponent.scss";
import {Link} from "react-router-dom";
import GuessTheNumberComponent from "./GuessTheNumberComponent";
import GuessTheWordsComponent from "./GuessTheWordsComponent";

const InfoComponent = ({ field, topic, topicParagraph, topicSources, checkedSources, setCheckedSources, allowMinigame, minigame, checkedMinigame, setCheckedMinigame }) => {
    const [showSources, setShowSources] = useState(false);
    const [showMinigame, setShowMinigame] = useState(false);

    useEffect(() => {
        setCheckedSources(false);
        setShowSources(false);

        setCheckedMinigame(false);
        setShowMinigame(false);
    }, [ field, topic, topicParagraph, topicSources, setCheckedSources, setCheckedMinigame ]);

    function handleShowSources() {
        setShowSources(!showSources);
        setCheckedSources(true);
    }

    function handleShowMinigame() {
        setShowMinigame(!showMinigame);
        setCheckedMinigame(true);
    }

    return (
        <div className="InfoComponent">
            <div className="field">{field}</div>
            <div className="topic">{topic}</div>
            <div className="topic-paragraph">{topicParagraph}</div>
            <div className="button-container">
                <button className="default-button"
                        onClick={() => handleShowSources()}
                >
                    Weiterführende Informationen
                </button>
                {allowMinigame &&
                    <button className="default-button"
                            onClick={() => handleShowMinigame()}
                    >
                        Minigame
                    </button>
                }
            </div>
            {showMinigame && allowMinigame &&
                <div>
                    {minigame.type === "hint" &&
                        <div className="minigame-infobox">
                            {minigame.hint}
                        </div>
                    }
                    {minigame.type === "image" &&
                        <div className="minigame-infobox">
                            <img src={require("../content/img/" + minigame.image)} alt={minigame.image} />
                            {minigame.text}
                        </div>
                    }
                    {minigame.type === "guess" &&
                        <div className="minigame-infobox">
                            <GuessTheWordsComponent minigame={minigame} />
                        </div>
                    }
                    {minigame.type === "guesstheanswer" &&
                        <div className="minigame-infobox">
                            <GuessTheNumberComponent minigame={minigame} />
                        </div>
                    }
                </div>
            }
            {showSources &&
                <div className="sources-paragraph">{
                    topicSources.map((source, index) => (
                        <li key={source.id || source.source || index}>
                            <Link to={source.link} target="_blank" rel="noreferrer">{source.source}</Link>
                        </li>
                    ))}
                </div>
            }
        </div>
    );
};

export default InfoComponent;