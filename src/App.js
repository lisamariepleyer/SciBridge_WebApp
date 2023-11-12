import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import QuizPagePlain from './pages/QuizPagePlain';
import QuizPageFeedback from "./pages/QuizPageFeedback";
import QuestionnairePage from "./pages/QuestionnairePage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/plain' element={<QuizPagePlain/>} />
                <Route path='/feedback' element={<QuizPageFeedback/>} />
                <Route path='/questionnaire' element={<QuestionnairePage/>} />
            </Routes>
        </div>
    );
}

export default App;
