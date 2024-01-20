import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import QuizPage from "./pages/QuizPage";
import QuestionnairePage from "./pages/QuestionnairePage";
import EndPage from "./pages/EndPage";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('refreshing') === 'true') {
            localStorage.removeItem('refreshing');
            navigate('/');
        }
    }, [navigate]);

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/quiz' element={<QuizPage/>} />
                <Route path='/questionnaire' element={<QuestionnairePage/>} />
                <Route path='/goodbye' element={<EndPage/>} />
            </Routes>
        </div>
    );
}

export default App;
