import { useState } from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { GuessInput, GuessTracker } from '..';
import { GuessesArray } from '../types';


// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export const Game = () => {
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState<GuessesArray>([]);

  return (
    <>
      <GuessTracker answer={answer} guesses={guesses} />
      <GuessInput guess={guess} guesses={guesses} setGuess={setGuess} setGuesses={setGuesses} />
    </>
  );
}
