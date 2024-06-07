import { useState } from 'react';
import { Banner, GuessInput, GuessTracker } from 'src/components';
import { NUM_OF_GUESSES_ALLOWED } from 'src/constants';
import { WORDS } from 'src/data';
import { BannerVariant, Status } from 'src/enums';
import { checkGuess } from 'src/helpers';
import { GuessesArray } from 'src/types';
import { isNotNullOrUndefined, sample } from 'src/utils';

export const Game = () => {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState<GuessesArray>([]);

  const resetGame = () => {
    setAnswer(sample(WORDS));
    setGuess('');
    setGuesses([]);
  }

  const numberOfGuesses = guesses.length;
  
  const validatedGuesses = guesses.map(uncheckedGuess => checkGuess(uncheckedGuess, answer)).filter(isNotNullOrUndefined);
  const lastGuess = validatedGuesses.at(-1);

  const gameWon = lastGuess?.every(validatedGuess => validatedGuess.status === Status.Correct);
  const gameLost = numberOfGuesses === NUM_OF_GUESSES_ALLOWED && !gameWon;
  const gameOver = gameWon || gameLost;

  return (
    <>
      {gameOver ? <Banner answer={answer} numberOfGuesses={numberOfGuesses} resetGame={resetGame} variant={gameWon ? BannerVariant.Happy : BannerVariant.Sad} /> : null}
      <GuessTracker answer={answer} guesses={guesses} />
      <GuessInput gameOver={gameOver} guess={guess} guesses={guesses} setGuess={setGuess} setGuesses={setGuesses} />
    </>
  );
}
