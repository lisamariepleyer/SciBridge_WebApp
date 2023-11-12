import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import '../styles/buttons.scss'

function HomePage() {
    return (
        <div className="HomePage">
            <div className="button-container">
                <Link to="/plain" className="comic-button">Schlicht</Link>
                <Link to="/feedback" className="comic-button">Feedback</Link>
            </div>
        </div>
    );
}

export default HomePage;