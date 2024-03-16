import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import StepperComponent from "../components/StepperComponent";

import "../styles/buttons.scss";
import "../styles/radiooptions.scss";

import "./QuestionnairePage.scss";

function QuestionnairePage() {
    const location = useLocation();
    const navigation = useNavigate();
    const areAnswersCorrect = location.state.areAnswersCorrect;
    const uuid = location.state.uuid;

    const [ageGroup, setAgeGroup] = useState('');
    const [gender, setGender] = useState('');
    const [hasUsedSources, setHasUsedSources] = useState('');
    const [hasUsedGoogle, setHasUsedGoogle] = useState('');
    const [knowledge, setKnowledge] = useState({
        "IT & Technik": "1",
        "Physik & Chemie": "1",
        "Medizin": "1",
        "Klimawandel": "1"
    });

    const ageGroups = ['unter 18', '18-24', '25-34', '35-44', '45-54', '55-64', '65-74', '75-84', 'über 85', "keine Angabe"];
    const genders = ["männlich", "weiblich", "nicht-binär", "andere", "keine Angabe"]
    const yesOrNo = ['Ja', 'Nein'];

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
        addPersonalDatatoDB()
            .catch(error => {
                console.log("Response not OK");
                //console.error('Error:', error);
            })
            .finally(() => {
                navigation('/goodbye');
            });
    };

    const addPersonalDatatoDB = () => {
        return axios.post(
            process.env.REACT_APP_GOOGLE_SHEET_URL + 'personalinfos',
            {
                uid: uuid,
                age: ageGroup,
                gender: gender,
                hasUsedSources: hasUsedSources,
                hasUsedGoogle: hasUsedGoogle,
                level_it: knowledge["IT & Technik"],
                level_physics_chemistry: knowledge["Physik & Chemie"],
                level_medicine: knowledge.Medizin,
                level_climate_change: knowledge.Klimawandel
            }
        )
            .then(function () {
                console.log("Response OK");
            })
            .catch(function () {
                throw new Error('Network response not OK');
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

                <div className="questionnaire-element">
                    <h3>Zu welcher Alterskategorie gehörst du?</h3>
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
                    <h3>Welchem Geschlecht fühlst du dich zugehörig?</h3>
                    {genders.map((option, index) => (
                        <div className="radio-option" key={index}>
                            <input
                                type="radio"
                                id={`genderOptions-${index}`}
                                name="genderOptions"
                                value={option}
                                checked={gender === option}
                                onChange={() => setGender(option)}
                            />
                            <label htmlFor={`genderOptions-${index}`}>{option}</label>
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
