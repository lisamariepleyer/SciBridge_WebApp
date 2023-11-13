import React, {useState, useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './HomePage.scss';
import '../styles/buttons.scss'
import logo from '../content/logo.png';

function HomePage() {
    let navigation = useNavigate();
    let infoContainerRef = useRef(null);

    const redirectToRandomPageStyling = () => {
        const randomInt = Math.floor(Math.random() * 2);

        if (randomInt === 0) {
            navigation('/plain');
        } else {
            navigation('/feedback');
        }
    };

    const scrollToInfoContainer = () => {
        console.log("I am scrolling")
        infoContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }

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
                        onClick={() => redirectToRandomPageStyling()}
                    >
                        Ich möchte teilnehmen!
                    </button>
                    <button
                        className="comic-button"
                        onClick={() => scrollToInfoContainer()}
                    >
                        Erzähl mir mehr ...
                    </button>
                </div>
            </div>

            <div className="info-container" ref={infoContainerRef}>
                <div className="info-element">
                    <h3>
                        Worum geht es?
                    </h3>
                    <p>
                        Ich habe ein Quiz entworfen, das sich mit verschiedenen wissenschaftlichen Konzepten befasst. Aber hier kommt der Clou – es ist mehr als nur ein Quiz. Ich möchte verstehen, wie Webdesign-Elemente unser Verständnis von komplexen wissenschaftlichen Ideen beeinflussen oder sogar verbessern können.
                    </p>
                </div>

                <div className="info-element">
                    <h3>
                        Warum teilnehmen?
                    </h3>
                    <p>
                        Deine Teilnahme besteht nicht nur darin, Fragen zu beantworten. Es geht darum, sich auf neue und interaktive Weise mit der Wissenschaft zu beschäftigen. Egal, ob du ein Wissenschaftsfan oder einfach nur neugierig bist, das Quiz ist für alle gedacht!
                    </p>
                </div>

                <div className="info-element">
                    <h3>
                        Googeln ist erlaubt!
                    </h3>
                    <p>
                        Ja, du hast richtig gelesen! Googeln während des Quiz ist absolut in Ordnung. Tatsächlich ist es sogar erwünscht! Dieses Quiz ist so konzipiert, dass du dich mit wissenschaftlichen Themen auseinandersetzt, deine Neugier weckst und vielleicht sogar mehr entdeckst, als gefragt wird. Also zögere nicht, in den Ozean des Internets einzutauchen, während du antwortest.
                    </p>
                </div>

                <div className="info-element">
                    <h3>
                        Was erwartet dich?
                    </h3>
                    <p>
                        Das Quiz ist unkompliziert, regt zum Nachdenken an und deckt eine Reihe wissenschaftlicher Themen ab. Keine Sorge, wenn du kein Wissenschaftsexperte bist – das Ziel ist zu lernen und zu erkunden, nicht dein Wissen zu testen.
                        Nach dem Quiz würde ich mich freuen, wenn du einige persönliche Einblicke durch einen kurzen Fragebogen teilen könntest. Details wie dein Alter, dein Vorwissen zu den Themen und deine Erfahrungen während des Quiz sind für meine Arbeit unglaublich wertvoll. Deine Beteiligung wird enorm zu dieser Forschung beitragen und hilft, die Zukunft des Bildungswebdesigns zu gestalten.
                    </p>
                </div>

                <div className="info-element">
                    <h3>
                        Datenschutz-Compliance
                    </h3>
                    <p>
                        Bevor du mit dem Quiz beginnst, wirst du aufgefordert, Datenschutzerklärung zu akzeptieren. Dies soll sicherstellen, dass deine persönlichen Informationen mit größter Sorgfalt und in Übereinstimmung mit den Datenschutzgesetzen behandelt werden. Deine Teilnahme und Daten sind entscheidend für den Erfolg dieses Projekts, und es ist für mich oberste Priorität, deine Privatsphäre zu schützen.
                    </p>
                </div>

                <div className="info-element">
                    <h3>
                        Dein Beitrag zählt
                    </h3>
                    <p>
                        Durch deine Teilnahme hilfst du nicht nur meiner Forschung, sondern trägst auch zu einem breiteren Verständnis bei, wie digitale Plattformen für das Lernen optimiert werden können. Dein Input ist unbezahlbar!
                    </p>
                </div>

                <div className="info-element">
                    <p>
                        Bist du bereit einzutauchen?
                    </p>
                </div>

                <button
                    className="comic-button"
                    onClick={() => redirectToRandomPageStyling()}
                >
                    Ich möchte teilnehmen!
                </button>
            </div>

            <div className="button-container">
                <Link to="/plain">Schlicht</Link>
                <Link to="/feedback">Feedback</Link>
            </div>
        </div>
    );
}

export default HomePage;