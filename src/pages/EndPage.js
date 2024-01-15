import React from 'react';
import {useNavigate} from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';

import './EndPage.scss';
import '../styles/sections.scss';
import '../styles/buttons.scss'

import logo from "../content/logo.png";

function EndPage() {
    const navigation = useNavigate();

    const copyToClipboard = () => {
        clipboardCopy(process.env.REACT_APP_URL)
            .then(() => {
                alert("Link copied to clipboard!");
                // TODO: throw custom alert
            })
            .catch((error) => {
                console.error('Could not copy text: ', error);
            });

        navigation('/');
    }

    return (
        <div className="EndPage">
            <div className="welcome-container">
                <div className="welcome-element">
                    <img src={logo} alt="SciBridge Logo" />
                    <h3>Vielen Dank für deine Teilnahme!</h3>
                    <p>
                        Ich würde mich freuen, wenn du dieses Quiz teilst.
                    </p>
                </div>
                <div className="button-container">
                    <button
                        className="comic-button"
                        onClick={() => copyToClipboard()}
                    >
                        Link in die Zwischenablage kopieren
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EndPage;