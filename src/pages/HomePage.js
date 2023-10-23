import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import '../styles/buttons.scss'

function HomePage() {
    return (
        <div className="HomePage">
            <div className="button-container">
                <Link to="/schlicht" className="comic-button">Schlicht</Link>
                <Link to="/animiert" className="comic-button">Animiert</Link>
            </div>
        </div>
    );
}

export default HomePage;