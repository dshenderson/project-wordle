import { GuessesArray } from '../types';

interface IGuessesProps {
  guesses: GuessesArray;
}

export const GuessTracker = ({ guesses }: IGuessesProps) => guesses.length ? (
  <ul className="guess-results">
    {guesses.map(guess => (
      <li className="guess" key={guess}>{guess}</li>
    ))}
  </ul>
) : null;
