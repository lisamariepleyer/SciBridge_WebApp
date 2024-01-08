import React, {useState} from 'react';
import {useLocation} from "react-router";
import StepperComponent from "../components/StepperComponent";
import {useNavigate} from 'react-router-dom';

import "../styles/buttons.scss";
import "../styles/radiooptions.scss";

import "./QuestionnairePage.scss";

function QuestionnairePage() {
    const navigation = useNavigate();
    const location = useLocation();
    const areAnswersCorrect = location.state.areAnswersCorrect;
    const uuid = location.state.uuid;

    const [ageGroup, setAgeGroup] = useState('');
    const [hasUsedSources, setHasUsedSources] = useState('');
    const [hasUsedGoogle, setHasUsedGoogle] = useState('');
    const [knowledge, setKnowledge] = useState({
        "IT & Technik": "1",
        "Physik & Chemie": "1",
        "Medizin": "1",
        "Klimawandel": "1"
    });

    const ageGroups = ['unter 18', '18-24', '25-34', '35-44', '45-54', '55-64', '65-74', '75-84', 'über 85'];
    const yesOrNo = ['Ja', 'Nein'];

    function countCorrectAnswers() {
        return areAnswersCorrect.filter(Boolean).length;
    }

    const handleKnowledgeChange = (topic, value) => {
        setKnowledge(prevState => ({
            ...prevState,
            [topic]: value
        }));
    };

    const redirectToGoodbye = () => {
        addPersonalDatatoDB();
        navigation('/goodbye');
    };

    const addPersonalDatatoDB = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                uid: uuid,
                age: ageGroup,
                hasUsedSources: hasUsedSources,
                hasUsedGoogle: hasUsedGoogle,
                level_it: knowledge["IT & Technik"],
                level_physik_chemistry: knowledge["Physik & Chemie"],
                level_medicine: knowledge.Medizin,
                level_climate_change: knowledge.Klimawandel
            })
        };

        fetch(process.env.REACT_APP_HOST_URL + "personalinfo/", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data.uid);
                // TODO: Handle success response
            })
            .catch(error => {
                console.error('Error:', error);
                // TODO: Handle errors here
            });
    };

    return (
        <div className="QuestionnairePage">
            <div className="info-element">
                <h1>Gratulation!</h1>
                <StepperComponent steps={areAnswersCorrect} margin="60px" />
                <p>Du hast {countCorrectAnswers()} von {areAnswersCorrect.length} Fragen richtig beantwortet!</p>
                <h2>Nun zu dir ...</h2>
            </div>

            <div>
                <div className="questionnaire-element">
                    <h3>Wie alt bist du?</h3>
                    {ageGroups.map((option, index) => (
                        <div className="radio-option" key={index}>
                            <input
                                type="radio"
                                id={`ageOptions-${index}`}
                                name="ageOptions"
                                value={option}
                                checked={ageGroup === option}
                                onChange={() => setAgeGroup(option)}
                            />
                            <label htmlFor={`ageOptions-${index}`}>{option}</label>
                        </div>
                    ))}
                </div>

                <div className="questionnaire-element">
                    <h3>Hast du die angegebenen weiterführenden Links verwendet?</h3>
                    {yesOrNo.map((option, index) => (
                        <div className="radio-option" key={index}>
                            <input
                                type="radio"
                                id={`hasUsedSourcesOptions-${index}`}
                                name="hasUsedSourcesOptions"
                                value={option}
                                checked={hasUsedSources === option}
                                onChange={() => setHasUsedSources(option)}
                            />
                            <label htmlFor={`hasUsedSourcesOptions-${index}`}>{option}</label>
                        </div>
                    ))}
                </div>

                <div className="questionnaire-element">
                    <h3>Hast du andere Quellen (zum Beispiel Google) verwendet um die Fragen zu beantworten oder dich mehr mit dem Thema zu beschäftigen?</h3>
                    {yesOrNo.map((option, index) => (
                        <div className="radio-option" key={index}>
                            <input
                                type="radio"
                                id={`hasUsedGoogleOptions-${index}`}
                                name="hasUsedGoogleOptions"
                                value={option}
                                checked={hasUsedGoogle === option}
                                onChange={() => setHasUsedGoogle(option)}
                            />
                            <label htmlFor={`hasUsedGoogleOptions-${index}`}>{option}</label>
                        </div>
                    ))}
                </div>

                <div className="questionnaire-element">
                    <h3>Bewerte deine Vorkenntnisse in den folgenden Bereichen:</h3>
                    <ol>
                        <li>ich habe keine Vorkenntnisse</li>
                        <li>ich habe davon gehört, aber nie Zeit in eine Recherche investiert</li>
                        <li>ich habe mich mit dem Thema bereits intensiv beschäftigt</li>
                    </ol>
                    {Object.keys(knowledge).map(topic => (
                        <div className="knowledge-slider-element" key={topic}>
                            <div className="topic">
                                <label>{topic}</label>
                            </div>
                            <div className="slider">
                                <input
                                    type="range"
                                    min="1"
                                    max="3"
                                    step="1"
                                    value={knowledge[topic]}
                                    onChange={e => handleKnowledgeChange(topic, e.target.value)}
                                />
                            </div>
                            <div className="knowledge">
                                <span>{knowledge[topic]}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="button-element">
                    <button className={"comic-button"} onClick={() => redirectToGoodbye()}>
                        Ende
                    </button>
                </div>
            </div>
        </div>
    );
}

export default QuestionnairePage;
