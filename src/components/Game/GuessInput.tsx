import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { GuessesArray } from './types';

interface IGuessInputProps {
  guess: string;
  guesses: GuessesArray;
  setGuess: Dispatch<SetStateAction<string>>;
  setGuesses: Dispatch<SetStateAction<GuessesArray>>;
}

export const GuessInput = ({ guess, guesses, setGuess, setGuesses }: IGuessInputProps) => {
  const handleGuess = (e: ChangeEvent<HTMLInputElement>) => setGuess(e.currentTarget.value.toUpperCase());

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (guesses.includes(guess)) {
      window.alert(`You have already guessed "${guess}"`);
    } else {
      console.log({ guess });
      setGuesses((prevGuesses = []) => [...prevGuesses, guess]);
      setGuess('');
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" pattern='[A-Z]{5}' value={guess} onChange={handleGuess} />
    </form>
  );
};
