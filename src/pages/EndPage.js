import React from 'react';
import {useNavigate} from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';

import './EndPage.scss';
import '../styles/sections.scss';
import '../styles/buttons.scss'

import logo from "../content/logo.png";
import QRcode from "../content/QRcode.png";

function EndPage() {
    const navigation = useNavigate();

    const copyToClipboard = () => {
        clipboardCopy(process.env.REACT_APP_URL)
            .then(() => {
                alert("Link in die Zwischenablage kopiert!");
            })
            .catch((error) => {
                console.error('Could not copy text: ', error);
                alert("Link konnte nicht kopiert werden!");
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

                <div className="welcome-element">
                    <p>
                        ... oder lass dein Gegenüber einfach diesen Code scannen!
                    </p>
                    <img src={QRcode} className="qrcode" alt="SciBridge QR Code" />
                </div>
            </div>
        </div>
    )
}

export default EndPage;