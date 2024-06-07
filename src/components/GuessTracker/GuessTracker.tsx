import { NUM_OF_GUESSES_ALLOWED } from 'src/constants';
import { range } from 'src/utils';
import { Guess } from '..';
import { GuessesArray } from '../types';

interface IGuessesProps {
  guesses: GuessesArray;
}

export const GuessTracker = ({ guesses }: IGuessesProps) => (
  <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((_, idx) => {
      const guess = guesses[idx];
      const key = guess ?? `guess-${idx}`;

      return (
        <Guess guess={guess} key={key} />
      );
    })}
  </div>
);
