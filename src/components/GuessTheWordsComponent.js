import React, {useState} from 'react';

const GuessTheWordsComponent = ({ minigame }) => {
    const [guessAnswer, setGuessAnswer] = useState('');
    const [guessMessage, setGuessMessage] = useState('');
    const [guessCounter, setGuessCounter] = useState(0);
    const [isMaxGuessesReached, setIsMaxGuessesReached] = useState(false);
    const MAXGUESSES = 5;

    const handleGuessInputChange = (e) => {
        setGuessAnswer(e.target.value);
    }

    const checkIfMaxGuessesReached = () => {
        if (guessCounter >= MAXGUESSES - 1) {
            setGuessMessage(minigame.answermessage
                + minigame.possibleanswers.join(', '));
            setIsMaxGuessesReached(true);
        }
    }

    function handleEnterKeyPress(e) {
        if (e.key === "Enter") {
            checkGuessAnswer();
        }
    }

    const checkGuessAnswer = () => {
        if (!isMaxGuessesReached) {
            if (minigame.possibleanswers.indexOf(guessAnswer) > -1) {
                setGuessMessage("Korrekt! "
                    + minigame.answermessage
                    + minigame.possibleanswers.join(', '));
                setIsMaxGuessesReached(true);
            } else {
                setGuessMessage("Leider nicht. Versuchs nochmal!")
            }

            setGuessCounter(guessCounter + 1);
        }

        checkIfMaxGuessesReached();
    };

    return (
        <div>
            {minigame.question}

            {!isMaxGuessesReached &&
                <div>
                    <input
                        className="default-input"
                        type={'text'}
                        value={guessAnswer}
                        placeholder={'Passwort'}
                        onChange={handleGuessInputChange}
                        onKeyDown={handleEnterKeyPress}
                    />

                    <button className="default-button"
                            onClick={checkGuessAnswer}>
                        Prüfen
                    </button>

                    <p>Versuch {guessCounter} von {MAXGUESSES} verbraucht.</p>
                </div>
            }
            <p>{guessMessage}</p>
        </div>
    );
};

export default GuessTheWordsComponent;