import React, {useState, useEffect} from "react";
import "./InfoComponent.scss";
import {Link} from "react-router-dom";

const InfoComponent = ({ field, topic, topicParagraph, topicSources, checkedSources, setCheckedSources }) => {
    const [showSources, setShowSources] = useState(false);

    useEffect(() => {
        setCheckedSources(false);
        setShowSources(false);
    }, [ field, topic, topicParagraph, topicSources ]);

    function handleShowSources() {
        setShowSources(!showSources);
        setCheckedSources(true);
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
                    Quellen
                </button>
            </div>
            {showSources &&
                <div className="sources-paragraph">{
                    topicSources.map((source) => (
                        <li>
                            <Link to={source.link} target="_blank">{source.source}</Link>
                        </li>
                    ))}
                </div>
            }
        </div>
    );
};

export default InfoComponent;