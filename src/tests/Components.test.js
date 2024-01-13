import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import GuessTheWordsComponent from '../components/GuessTheWordsComponent';
import GuessTheNumberComponent from '../components/GuessTheNumberComponent';
import StepperComponent from '../components/StepperComponent';
import InfoComponent from '../components/InfoComponent';
import QuestionComponent from '../components/QuestionComponent';

// TESTS FOR GuessTheWordsComponent

test('renders GuessTheWordsComponent and handles input', () => {
    const minigame = { possibleanswers: ['word1', 'word2'], answermessage: 'Correct!' };
    render(<GuessTheWordsComponent minigame={minigame} />);

    // Simulate and check user input
    const inputElement = screen.getByPlaceholderText(/Passwort/i);
    fireEvent.change(inputElement, { target: { value: 'word1' } });
    expect(inputElement.value).toBe('word1');
});

test('renders GuessTheWordsComponent, handles input and returns response if correct', () => {
    const minigame = { possibleanswers: ['word1', 'word2'], answermessage: '' };
    render(<GuessTheWordsComponent minigame={minigame} />);

    // Simulate user input
    const inputElement = screen.getByPlaceholderText(/Passwort/i);
    fireEvent.change(inputElement, { target: { value: 'word1' } });

    // Simulate button click
    const checkButton = screen.getByText(/Prüfen/i);
    fireEvent.click(checkButton);

    // Check if the correct message is displayed
    const messageElement = screen.getByText(/Korrekt!/i);
    expect(messageElement).toBeInTheDocument();
});

test('renders GuessTheWordsComponent, handles input and returns response if incorrect', () => {
    const minigame = { possibleanswers: ['word1', 'word2'], answermessage: '' };
    render(<GuessTheWordsComponent minigame={minigame} />);

    // Simulate user input
    const inputElement = screen.getByPlaceholderText(/Passwort/i);
    fireEvent.change(inputElement, { target: { value: 'word3' } });

    // Simulate button click
    const checkButton = screen.getByText(/Prüfen/i);
    fireEvent.click(checkButton);

    // Check if the correct message is displayed
    const messageElement = screen.getByText(/Leider nicht/i);
    expect(messageElement).toBeInTheDocument();
});

test('renders GuessTheWordsComponent, handles input and count tries', () => {
    const minigame = { possibleanswers: ['word1', 'word2'], answermessage: '' };
    render(<GuessTheWordsComponent minigame={minigame} />);

    // Simulate user input
    const inputElement = screen.getByPlaceholderText(/Passwort/i);
    fireEvent.change(inputElement, { target: { value: 'word3' } });

    // Simulate button click
    const checkButton = screen.getByText(/Prüfen/i);
    fireEvent.click(checkButton);

    // Check if the tries have been updated
    const messageElement = screen.getByText(/Versuch 1/i);
    expect(messageElement).toBeInTheDocument();
});

// TESTS FOR GuessTheNumberComponent

test('renders GuessTheNumberComponent and handles input', () => {
    render(<GuessTheNumberComponent minigame={{ answer: 5 }} />);

    // Simulate user input
    const inputElement = screen.getByPlaceholderText(/Jahre/i);
    fireEvent.change(inputElement, { target: { value: '3' } });
    expect(inputElement.value).toBe('3');
});

test('renders GuessTheNumberComponent, handles input and returns response if correct', () => {
    render(<GuessTheNumberComponent minigame={{ answer: 5 }} />);

    // Simulate user input
    const inputElement = screen.getByPlaceholderText(/Jahre/i);
    fireEvent.change(inputElement, { target: { value: '5' } });

    // Simulate button click
    const checkButton = screen.getByText(/Prüfen/i);
    fireEvent.click(checkButton);

    // Check if the correct message is displayed
    const messageElement = screen.getByText(/Korrekt!/i);
    expect(messageElement).toBeInTheDocument();
});

test('renders GuessTheNumberComponent, handles input and returns response if incorrect', () => {
    render(<GuessTheNumberComponent minigame={{ answer: 5 }} />);

    // Simulate user input
    const inputElement = screen.getByPlaceholderText(/Jahre/i);
    fireEvent.change(inputElement, { target: { value: '3' } });

    // Simulate button click
    const checkButton = screen.getByText(/Prüfen/i);
    fireEvent.click(checkButton);

    // Check if the correct message is displayed
    const messageElement = screen.getByText(/Die korrekte Antwort ist /i);
    expect(messageElement).toBeInTheDocument();
});

test('renders GuessTheNumberComponent, handles input and count tries', () => {
    render(<GuessTheNumberComponent minigame={{ answer: 5 }} />);

    // Simulate user input
    const inputElement = screen.getByPlaceholderText(/Jahre/i);
    fireEvent.change(inputElement, { target: { value: '3' } });

    // Simulate button click
    const checkButton = screen.getByText(/Prüfen/i);
    fireEvent.click(checkButton);

    // Check if the tries have been updated
    const messageElement = screen.getByText(/Versuch 1/i);
    expect(messageElement).toBeInTheDocument();
});

// TESTS FOR StepperComponent

test('renders StepperComponent with steps', () => {
    const steps = [true, false, null];
    render(<StepperComponent steps={steps} />);

    const stepElements = screen.getAllByTestId('step');
    expect(stepElements.length).toBe(steps.length);
});

test('StepperComponent steps have correct colors', () => {
    const steps = [true, false, null]; // Example states
    render(<StepperComponent steps={steps} />);

    // Check if the correct classes are applied
    const stepElements = screen.getAllByTestId('step');
    expect(stepElements[0]).toHaveClass('true');
    expect(stepElements[1]).toHaveClass('false');
    expect(stepElements[2]).toHaveClass('null');
});

// TESTS FOR InfoComponent

test('renders InfoComponent with given properties', () => {
    const props = {
        field: 'Science',
        topic: 'Biology',
        topicParagraph: 'About Biology',
        topicSources: [{ link: '/source', source: 'Source1' }],
        allowMinigame: true,
        minigame: { type: 'hint', hint: 'A hint' },
        setCheckedSources: jest.fn(),
        setCheckedMinigame: jest.fn()
    };
    render(<InfoComponent {...props} />);

    // Check if all content is rendered
    expect(screen.getByText('Science')).toBeInTheDocument();
    expect(screen.getByText('Biology')).toBeInTheDocument();
    expect(screen.getByText('About Biology')).toBeInTheDocument();
});

test('renders InfoComponent with sources not being shown', () => {
    const props = {
        field: 'Science',
        topic: 'Biology',
        topicParagraph: 'About Biology',
        topicSources: [{ link: '/source', source: 'Source1' }],
        allowMinigame: true,
        minigame: { type: 'hint', hint: 'A hint' },
        setCheckedSources: jest.fn(),
        setCheckedMinigame: jest.fn()
    };
    // InfoComponent is wrapped in Router component. Provides the necessary context for any router-related functionality used within InfoComponent.
    render(
        <Router>
            <InfoComponent {...props} />
        </Router>
    );

    // Check if sources are hidden
    const sourceElement = screen.queryByText('Source1');
    expect(sourceElement).not.toBeInTheDocument();
});

test('renders InfoComponent with sources being shown and hidden after clicking button', () => {
    const props = {
        field: 'Science',
        topic: 'Biology',
        topicParagraph: 'About Biology',
        topicSources: [{ link: '/source', source: 'Source1' }],
        allowMinigame: true,
        minigame: { type: 'hint', hint: 'A hint' },
        setCheckedSources: jest.fn(),
        setCheckedMinigame: jest.fn()
    };
    // InfoComponent is wrapped in Router component. Provides the necessary context for any router-related functionality used within InfoComponent.
    render(
        <Router>
            <InfoComponent {...props} />
        </Router>
    );

    // Simulate sources button click
    const sourcesButton = screen.getByText(/Weiterführende Informationen/i);
    fireEvent.click(sourcesButton);

    // Check if sources are visible
    const sourceElement = screen.queryByText('Source1');
    expect(sourceElement).toBeInTheDocument();

    // Check if sources are hidden
    fireEvent.click(sourcesButton);
    expect(sourceElement).not.toBeInTheDocument();
});

// TESTS FOR QuestionComponent

test('renders QuestionComponent question and answer options', () => {
    const props = {
        question: 'What is 2 + 2?',
        answerOptions: ['3', '4', '5'],
        correctAnswer: '4',
        setSelectedAnswer: jest.fn(),
        setTopicIndex: jest.fn(),
        setAreAnswersCorrect: jest.fn(),
        contentLength: 3,
        allowFeedback: false,
        setHasSubmitted: jest.fn()
    };

    render(
        <Router>
            <QuestionComponent {...props} />
        </Router>
    );

    // Check if all content is rendered
    expect(screen.getByText('What is 2 + 2?')).toBeInTheDocument();
    props.answerOptions.forEach(option => {
        expect(screen.getByLabelText(option)).toBeInTheDocument();
    });
});

test('renders QuestionComponent without Senden button being shown', () => {
    const mockSubmit = jest.fn();
    const props = {
        question: 'What is 2 + 2?',
        answerOptions: ['3', '4', '5'],
        correctAnswer: '4',
        setSelectedAnswer: jest.fn(),
        setTopicIndex: jest.fn(),
        setAreAnswersCorrect: jest.fn(),
        contentLength: 3,
        allowFeedback: false,
        setHasSubmitted: jest.fn(),
        onAnswerSubmit: mockSubmit
    };

    render(
        <Router>
            <QuestionComponent {...props} />
        </Router>
    );

    const submitButton = screen.queryByText(/Senden/i)
    expect(submitButton).not.toBeInTheDocument();
});

test('renders QuestionComponent with Senden button appearing after selecting answer', () => {
    const mockSubmit = jest.fn();
    const props = {
        question: 'What is 2 + 2?',
        answerOptions: ['3', '4', '5'],
        correctAnswer: '4',
        setSelectedAnswer: jest.fn(),
        setTopicIndex: jest.fn(),
        setAreAnswersCorrect: jest.fn(),
        contentLength: 3,
        allowFeedback: false,
        setHasSubmitted: jest.fn(),
        onAnswerSubmit: mockSubmit
    };

    render(
        <Router>
            <QuestionComponent {...props} />
        </Router>
    );

    const selectedAnswer = screen.getByLabelText(/4/i);
    fireEvent.click(selectedAnswer);

    const submitButton = screen.queryByText(/Senden/i)
    expect(submitButton).toBeInTheDocument();
});