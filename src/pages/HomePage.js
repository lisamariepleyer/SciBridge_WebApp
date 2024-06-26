import React, {useState, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import './HomePage.scss';
import '../styles/sections.scss';
import '../styles/buttons.scss';
import '../styles/spinner.scss'

import logo from '../content/logo.png';

function HomePage() {
    const [showQuizButton, setShowQuizButton] = useState(false);
    const [dataProtectionButtonText, setDataProtectionButtonText] = useState("Ich stimme zu");
    const [isLoading, setIsLoading] = useState(false);

    let navigation = useNavigate();
    let infoContainerRef = useRef(null);
    let dataProtectionContainerRef = useRef(null);

    const redirectToQuiz = () => {
        setIsLoading(true);

        const randomInt = Math.floor(Math.random() * 2);
        //const randomInt = 1;
        const style = randomInt === 0 ? 'plain' : 'feedback'
        const uuid = uuidv4();

        addUUIDtoDB(uuid, style)
            .then(() => {
                navigation(
                    '/quiz', {
                        state: {
                            style: style,
                            uuid: uuid
                        }});
            })
            .catch(error => {
                if (process.env.REACT_APP_TRACKING_MODE === 'false') {
                    console.log('Not in tracking mode. Starting quiz despite error.')
                    navigation(
                        '/quiz', {
                            state: {
                                style: style,
                                uuid: uuid
                            }});
                } else {
                    //console.error('Error:', error);
                    alert("Fehler. Bitte versuche es in ein paar Minuten erneut!");
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const addUUIDtoDB = (uuid, style) => {
        return axios.post(
            process.env.REACT_APP_GOOGLE_SHEET_URL + 'quizstarts',
            {
                uid: uuid,
                timestamp: new Date().toISOString(),
                view: style
            }
        )
            .then(function () {
                console.log("Response OK");
            })
            .catch(function () {
                throw new Error('Network response not OK');
            });
    };

    const scrollToInfoContainer = () => {
        infoContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToDataProtectionContainer = () => {
        dataProtectionContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const showStartQuizButton = () => {
        setShowQuizButton(!showQuizButton);

        if (dataProtectionButtonText === "Ich stimme zu") {
            setDataProtectionButtonText("✔︎")
        } else {
            setDataProtectionButtonText("Ich stimme zu")
        }
    };

    return (
        <div className="HomePage">
            <div className="welcome-container">
                <div className="welcome-element">
                    <img src={logo} alt="SciBridge Logo" />
                    <h3>Hallo und herzlich Willkommen bei SciBridge!</h3>
                    <p>
                        Ich bin Lisa-Marie, Studentin des Studiengangs “Software Design and Engineering” an der Fachhochschule Campus Wien. Im Rahmen meiner Masterarbeit begebe ich mich auf eine Reise zur Schnittstelle zwischen Technologie, Design und Wissenschaft, und ich lade dich herzlich ein, mich dabei zu begleiten!
                    </p>
                </div>
                <div className="button-container">
                    <button
                        className="comic-button"
                        onClick={() => scrollToDataProtectionContainer()}
                    >
                        Ich möchte teilnehmen
                    </button>
                    <button
                        className="comic-button"
                        onClick={() => scrollToInfoContainer()}
                    >
                        Erzähl mir mehr
                    </button>
                </div>
            </div>

            <div className="welcome-info-container" ref={infoContainerRef}>
                <div className="welcome-info-element">
                    <h3>
                        Worum geht es?
                    </h3>
                    <p>
                        Ich habe ein Quiz entworfen, das sich mit verschiedenen wissenschaftlichen Konzepten befasst. Aber hier kommt der Clou – es ist mehr als nur ein Quiz. Ich möchte verstehen, wie Webdesign-Elemente unser Verständnis von komplexen wissenschaftlichen Ideen beeinflussen oder sogar verbessern können.
                    </p>
                </div>

                <div className="welcome-info-element">
                    <h3>
                        Warum teilnehmen?
                    </h3>
                    <p>
                        Deine Teilnahme besteht nicht nur darin, Fragen zu beantworten. Es geht darum, sich auf neue und interaktive Weise mit der Wissenschaft zu beschäftigen. Egal, ob du ein Wissenschaftsfan oder einfach nur neugierig bist, das Quiz ist für alle gedacht!
                    </p>
                </div>

                <div className="welcome-info-element">
                    <h3>
                        Googlen ist erlaubt!
                    </h3>
                    <p>
                        Ja, du hast richtig gelesen! Google während des Quiz zu benutzen ist absolut in Ordnung. Tatsächlich ist es sogar erwünscht! Dieses Quiz ist so konzipiert, dass du dich mit wissenschaftlichen Themen auseinandersetzt, deine Neugier weckst und vielleicht sogar mehr entdeckst, als gefragt wird. Also zögere nicht, in den Ozean des Internets einzutauchen, während du antwortest.
                    </p>
                </div>

                <div className="welcome-info-element">
                    <h3>
                        Was erwartet dich?
                    </h3>
                    <p>
                        Das Quiz ist unkompliziert, regt zum Nachdenken an und deckt eine Reihe wissenschaftlicher Themen ab. Keine Sorge, wenn du kein Wissenschaftsexperte bist – das Ziel ist zu lernen und zu erkunden, nicht dein Wissen zu testen.
                        Nach dem Quiz würde ich mich freuen, wenn du einige persönliche Einblicke durch einen kurzen Fragebogen teilen könntest. Details wie dein Alter, dein Vorwissen zu den Themen und deine Erfahrungen während des Quiz sind für meine Arbeit unglaublich wertvoll. Deine Beteiligung wird enorm zu dieser Forschung beitragen und hilft, die Zukunft des Bildungswebdesigns zu gestalten.
                    </p>
                </div>

                <div className="welcome-info-element">
                    <h3>
                        Datenschutz-Compliance
                    </h3>
                    <p>
                        Bevor du mit dem Quiz beginnst, wirst du aufgefordert, die Datenschutzerklärung zu akzeptieren. Dies soll sicherstellen, dass deine persönlichen Informationen mit größter Sorgfalt und in Übereinstimmung mit den Datenschutzgesetzen behandelt werden. Deine Teilnahme und Daten sind entscheidend für den Erfolg dieses Projekts, und es ist für mich oberste Priorität, deine Privatsphäre zu schützen.
                    </p>
                </div>

                <div className="welcome-info-element">
                    <h3>
                        Dein Beitrag zählt
                    </h3>
                    <p>
                        Durch deine Teilnahme hilfst du nicht nur meiner Forschung, sondern trägst auch zu einem breiteren Verständnis bei, wie digitale Plattformen für das Lernen optimiert werden können. Dein Input ist unbezahlbar!
                    </p>
                </div>

                <div className="welcome-info-element">
                    <p>
                        Bist du bereit einzutauchen?
                    </p>
                </div>

                <button
                    className="comic-button"
                    onClick={() => scrollToDataProtectionContainer()}
                >
                    Ich möchte teilnehmen
                </button>
            </div>

            <div className="welcome-info-container" ref={dataProtectionContainerRef}>
                <div className="welcome-info-element">
                    <h2>
                        Einwilligung zur anonymen Speicherung von Quiz- und Fragebogenantworten
                    </h2>
                    <p>
                        Bevor du beginnst, möchte ich dich über die Datenverarbeitungspraktiken dieses Quiz informieren, in Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO) der Europäischen Union und den österreichischen Datenschutzgesetzen.
                    </p>
                </div>

                <div className="welcome-info-element">
                    <h3>
                        1. Anonymität und Datennutzung:
                    </h3>
                    <p>
                        Deine Teilnahme an diesem Quiz und dem anschließenden Fragebogen ist vollkommen freiwillig. Indem du fortfährst, erklärst du dich damit einverstanden, dass deine Antworten auf die Quizfragen und den Fragebogen, einschließlich deines Alters, deiner Geschlechtsidentität, deines Vorwissens und deiner Erfahrungen während des Quiz, anonym gespeichert und analysiert werden. Ich versichere dir, dass deine Antworten ausschließlich zu akademischen Zwecken verwendet werden, speziell im Zusammenhang mit der Forschung für meine Masterarbeit.
                    </p>
                </div>

                <div className="welcome-info-element">
                    <h3>
                        2. Datenspeicherung und -schutz:
                    </h3>
                    <p>
                        Alle gesammelten Daten werden sicher gespeichert und enthalten keine persönlich identifizierbaren Informationen. Meine Verfahren zur Datenspeicherung und -verarbeitung sind darauf ausgelegt, höchste Standards an Privatsphäre und Datensicherheit zu wahren, im Einklang mit der DSGVO und den österreichischen Datenschutzvorschriften.
                    </p>
                </div>

                <div className="welcome-info-element">
                    <h3>
                        3. Recht auf Widerruf:
                    </h3>
                    <p>
                        Du hast das Recht, das Quiz jederzeit ohne negative Konsequenzen zu verlassen. Solltest du dich für einen Rückzug entscheiden, bitte ich um <a href="https://www.linkedin.com/in/lisa-marie-pleyer-643092156/" target="_blank" rel="noreferrer">Kontaktaufnahme</a> und ich werde deine bis zu diesem Zeitpunkt gesammelten Daten nicht in der Studie verwenden.
                    </p>
                </div>

                <div className="welcome-info-element">
                    <h3>
                        4. Kontaktinformationen:
                    </h3>
                    <p>
                        Wenn du Fragen zur Handhabung deiner Daten oder deiner Rechte gemäß der DSGVO hast, zögere bitte nicht, mich zu <a href="https://www.linkedin.com/in/lisa-marie-pleyer-643092156/" target="_blank" rel="noreferrer">kontaktieren</a>.
                    </p>
                </div>

                <div className="welcome-info-element">
                    <p>
                        Indem du unten auf "Ich stimme zu" klickst, bestätigst du, dass du diese Informationen gelesen und verstanden hast und der anonymen Speicherung und Verwendung deiner Antworten für akademische Forschungszwecke zustimmst.
                    </p>
                </div>

                <div className="button-container">
                    <button
                        className={`comic-button ${
                            showQuizButton
                                ? 'discard'
                                : ''}`}
                        onClick={() => showStartQuizButton()}
                        hidden={isLoading}
                    >
                        {dataProtectionButtonText}
                    </button>
                    {showQuizButton && (
                        <button
                            className="comic-button"
                            onClick={() => redirectToQuiz()}
                            disabled={isLoading}
                        >
                            {isLoading
                                ? <div className="spinner"></div>
                                : 'Starte das Quiz'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomePage;