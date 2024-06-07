import { useState } from 'react';
import { Banner, GuessInput, GuessTracker } from 'src/components';
import { NUM_OF_GUESSES_ALLOWED } from 'src/constants';
import { WORDS } from 'src/data';
import { BannerVariant, Status } from 'src/enums';
import { checkGuess } from 'src/game-helpers';
import { GuessesArray } from 'src/types';
import { isNotNullOrUndefined, sample } from 'src/utils';


// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export const Game = () => {
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState<GuessesArray>([]);

  const numberOfGuesses = guesses.length;
  
  const validatedGuesses = guesses.map(uncheckedGuess => checkGuess(uncheckedGuess, answer)).filter(isNotNullOrUndefined);
  const lastGuess = validatedGuesses.at(-1);

  const gameWon = lastGuess?.every(validatedGuess => validatedGuess.status === Status.Correct);
  const gameLost = numberOfGuesses === NUM_OF_GUESSES_ALLOWED && !gameWon;
  const gameOver = gameWon || gameLost;
  console.log({ numberOfGuesses, gameWon, gameLost, gameOver, lastGuess })

  return (
    <>
      {gameOver ? <Banner answer={answer} numberOfGuesses={numberOfGuesses} variant={gameWon ? BannerVariant.Happy : BannerVariant.Sad} /> : null}
      <GuessTracker answer={answer} guesses={guesses} />
      <GuessInput gameOver={gameOver} guess={guess} guesses={guesses} setGuess={setGuess} setGuesses={setGuesses} />
    </>
  );
}
