import React from 'react';
import {useLocation} from "react-router";

function QuestionnairePage() {
    const location = useLocation();

    return (
        <div>
            <h1>This is the Next Page</h1>
            <p>{location.state.areAnswersCorrect}</p>
        </div>
    );
}

export default QuestionnairePage;