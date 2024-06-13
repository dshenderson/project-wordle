import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { Keyboard } from 'src/components';
import { GuessesArray, IKeyboardStatus } from 'src/types';

interface IGuessInputProps {
  gameOver: boolean;
  guesses: GuessesArray;
  keyboardStatus: IKeyboardStatus;
  setGuesses: Dispatch<SetStateAction<GuessesArray>>;
}

export const GuessInput = ({ gameOver, guesses, keyboardStatus, setGuesses }: IGuessInputProps) => {
  const [guess, setGuess] = useState('');

  const handleGuess = (e: ChangeEvent<HTMLInputElement>) => setGuess(e.currentTarget.value.toUpperCase());

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (guesses.includes(guess)) {
      window.alert(`You have already guessed "${guess}"`);
    } else {
      setGuesses(prevGuesses => [...prevGuesses, guess]);
      setGuess('');
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input disabled={gameOver} id="guess-input" type="text" pattern='[A-Z]{5}' value={guess} onChange={handleGuess} />
      <Keyboard keyboardStatus={keyboardStatus} setGuess={setGuess} />
    </form>
  );
};
