import { NUM_OF_GUESSES_ALLOWED } from 'src/constants';
import { checkGuess } from 'src/game-helpers';
import { range } from 'src/utils';
import { Guess } from '..';
import { GuessesArray } from '../types';

interface IGuessesProps {
  answer: string;
  guesses: GuessesArray;
}

export const GuessTracker = ({ answer, guesses }: IGuessesProps) => (
  <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((_, idx) => {
      const guess = guesses[idx];
      const validatedGuess = checkGuess(guess ?? '', answer);
      const key = guess ?? `guess-${idx}`;

      return (
        <Guess validatedGuess={validatedGuess} key={key} />
      );
    })}
  </div>
);
