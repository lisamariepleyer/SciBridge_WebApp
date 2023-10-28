import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import QuizPagePlain from './pages/QuizPagePlain';
import QuizPageFeedback from "./pages/QuizPageFeedback";
import QuestionnairePage from "./pages/QuestionnairePage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/plain' element={<QuizPagePlain/>} />
                    <Route path='/feedback' element={<QuizPageFeedback/>} />
                    <Route path='/questionnaire' element={<QuestionnairePage/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
