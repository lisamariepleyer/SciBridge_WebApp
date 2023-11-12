import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './HomePage.scss';
import '../styles/buttons.scss'

function HomePage() {
    let [pageStyling, setPageStyling] = useState('');

    let navigation = useNavigate();

    const redirectToRandomPageStyling = () => {
        const randomInt = Math.floor(Math.random() * 2);

        if (randomInt === 0) {
            navigation('/plain');
        } else {
            navigation('/feedback');
        }

        console.log(randomInt);
        console.log(pageStyling);
    };

    return (
        <div className="HomePage">
            <div className="button-container">
                <Link to="/plain" className="comic-button">Schlicht</Link>
                <Link to="/feedback" className="comic-button">Feedback</Link>
            </div>
            <div className="button-container">
                <button
                    className="comic-button"
                    onClick={() => redirectToRandomPageStyling()}
                >
                    Start
                </button>
            </div>
        </div>
    );
}

export default HomePage;