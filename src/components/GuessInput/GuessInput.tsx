import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { GuessesArray } from 'src/types';

interface IGuessInputProps {
  gameOver: boolean;
  guess: string;
  guesses: GuessesArray;
  setGuess: Dispatch<SetStateAction<string>>;
  setGuesses: Dispatch<SetStateAction<GuessesArray>>;
}

export const GuessInput = ({ gameOver, guess, guesses, setGuess, setGuesses }: IGuessInputProps) => {
  const handleGuess = (e: ChangeEvent<HTMLInputElement>) => setGuess(e.currentTarget.value.toUpperCase());

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (guesses.includes(guess)) {
      window.alert(`You have already guessed "${guess}"`);
    } else {
      setGuesses((prevGuesses = []) => [...prevGuesses, guess]);
      setGuess('');
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input disabled={gameOver} id="guess-input" type="text" pattern='[A-Z]{5}' value={guess} onChange={handleGuess} />
    </form>
  );
};
