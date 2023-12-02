import React, {useState} from 'react';

const GuessTheNumberComponent = ({ minigame }) => {
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
            setGuessMessage("Die korrekte Antwort ist: " + minigame.answer + minigame.answermessage);
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
            const guessAnswerInt = parseInt(guessAnswer);

            if (isNaN(guessAnswerInt)) {
                setGuessMessage("Nur Zahlen werden als input akzeptiert!")
            } else {
                if (guessAnswerInt === minigame.answer) {
                    setGuessMessage("Korrekt! " + minigame.answer + minigame.answermessage);
                    setIsMaxGuessesReached(true);
                } else if (guessAnswerInt < minigame.answer) {
                    setGuessMessage("Die korrekte Antwort ist höher!")
                } else {
                    setGuessMessage("Die korrekte Antwort ist kleiner!")
                }

                setGuessCounter(guessCounter + 1);
            }
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
                        type={'number'}
                        value={guessAnswer}
                        placeholder={'Jahre'}
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

export default GuessTheNumberComponent;