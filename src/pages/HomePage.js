import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import '../styles/buttons.scss'

function HomePage() {
    return (
        <div className="HomePage">
            <div className="button-container">
                <Link to="/SciBridge_WebApp/plain" className="comic-button">Schlicht</Link>
                <Link to="/SciBridge_WebApp/feedback" className="comic-button">Feedback</Link>
            </div>
        </div>
    );
}

export default HomePage;