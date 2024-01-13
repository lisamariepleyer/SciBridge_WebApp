import {render, screen, fireEvent} from '@testing-library/react';
import HomePage from "../pages/HomePage";
import QuestionnairePage from "../pages/QuestionnairePage";
import EndPage from '../pages/EndPage';
import {BrowserRouter as Router, MemoryRouter} from "react-router-dom";

// TESTS FOR HomePage

test('renders HomePage and "Ich stimme zu" button is absent', () => {
    render(
        <Router>
            <HomePage />
        </Router>
    );

    const startQuizButton = screen.queryByText(/Starte das Quiz/i);
    expect(startQuizButton).not.toBeInTheDocument();
});

test('renders HomePage and reveals "Starte das Quiz" button on "Ich stimme zu" button click', () => {
    render(
        <Router>
            <HomePage />
        </Router>
    );

    const buttonElement = screen.getAllByText(/Ich stimme zu/i)[1];
    fireEvent.click(buttonElement);

    const startQuizButton = screen.queryByText(/Starte das Quiz/i);
    expect(startQuizButton).toBeInTheDocument();
});

// TESTS FOR QuestionnairePage

test('renders QuestionnairePage and allows user to select from questionnaire', () => {
    const initialState = {
        areAnswersCorrect: [true, true, false, true]
    };

    render(
        <MemoryRouter initialEntries={[{ pathname: '/questionnaire', state: initialState }]}>
            <QuestionnairePage />
        </MemoryRouter>
    );

    const ageOption = screen.getByLabelText('18-24');
    fireEvent.click(ageOption);
    expect(ageOption).toBeChecked();

    const sourceUsageOption = screen.getAllByLabelText('Ja')[0];
    fireEvent.click(sourceUsageOption);
    expect(sourceUsageOption).toBeChecked();

    const googleUsageOption = screen.getAllByLabelText('Nein')[1];
    fireEvent.click(googleUsageOption);
    expect(googleUsageOption).toBeChecked();
});

// TESTS FOR EndPage

test('renders EndPage and handles clipboard button click', () => {
    render(
        <Router>
            <EndPage />
        </Router>
    );

    const buttonElement = screen.getByText(/Link in die Zwischenablage kopieren/i);
    fireEvent.click(buttonElement);

    const alertElement = screen.queryByText(/Link copied to clipboard!/i);
    expect(alertElement).not.toBeInTheDocument();
});