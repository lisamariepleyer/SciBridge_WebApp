import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import QuizPagePlain from './pages/QuizPagePlain';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/plain' element={<QuizPagePlain/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
