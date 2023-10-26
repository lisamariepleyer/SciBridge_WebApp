import React, {useState} from "react";
import "./InfoComponent.scss";

const InfoComponent = ({ field, topic, topicParagraph, topicSources }) => {
    const [showSources, setShowSources] = useState(false);

    return (
        <div className="InfoComponent">
            <div className="field">{field}</div>
            <div className="topic">{topic}</div>
            <div className="topic-paragraph">{topicParagraph}</div>
            <div className="button-container">
                <button className="default-button" onClick={() => setShowSources(!showSources)}>Sources</button>
            </div>
            {showSources && <div className="sources-paragraph">{topicSources}</div>}
        </div>
    );
};

export default InfoComponent;