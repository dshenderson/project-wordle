import { useEffect, useState } from "react";
import { NUM_OF_GUESSES_ALLOWED, QUERTY_KEYS } from "src/constants";
import { WORDS } from "src/data";
import { Status } from "src/enums";
import { checkGuess } from "src/helpers";
import { GuessesArray } from "src/types";
import { isNotNullOrUndefined, sample } from "src/utils";

const letters = QUERTY_KEYS.flat().filter(key => /[A-Z]/.test(key)).sort();

const initKeyboardStatus = letters.reduce((dict, curr) => ({
  ...dict,
  [curr]: { status: '' },
}), {});

export const useGameValidation = () => {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guesses, setGuesses] = useState<GuessesArray>([]);
  const [keyboardStatus, setKeyboardStatus] = useState(initKeyboardStatus);

  const numberOfGuesses = guesses.length;
  
  const validatedGuesses = guesses.map(uncheckedGuess => checkGuess(uncheckedGuess, answer)).filter(isNotNullOrUndefined);
  const lastGuess = validatedGuesses.at(-1) ?? [];
  const stringifiedLastGuess = JSON.stringify(lastGuess);

  useEffect(() => {
    const guess = JSON.parse(stringifiedLastGuess) as typeof lastGuess;

    const lettersInAnswer = answer.split('').reduce((obj, curr) => {
      const idx = curr as keyof typeof obj;
      return {
        ...obj,
        [curr]: {
          count: obj[idx] ? obj[idx]['count'] + 1 : 1,
        },
      };
    }, {});

    const newKeyboardStatus = guess.reduce((dict, curr) => {
      const idx = curr.letter as keyof typeof lettersInAnswer;

      if (!lettersInAnswer[idx]) {
        return {
          ...dict,
          [curr.letter]: { status: Status.Incorrect },
        };
      }

      const currInGuess = Array(lettersInAnswer[curr.letter as keyof typeof lettersInAnswer]['count']);

      if (currInGuess.length < lettersInAnswer[idx]['count']) {
        return {
          ...dict,
          [curr.letter]: { status: Status.Misplaced },
        };
      }

      const statuses = guess.filter(el => el.letter === curr.letter).map(el => el.status);

      return {
        ...dict,
        [curr.letter]: { status: statuses.some(status => status === Status.Misplaced) ? Status.Misplaced : Status.Correct},
      };
    }, {});
  
    setKeyboardStatus(prevKeyboardStatus => ({
      ...prevKeyboardStatus,
      ...newKeyboardStatus,
    }));
  }, [answer, stringifiedLastGuess]);

  const gameWon = lastGuess.length && lastGuess.every(validatedGuess => validatedGuess.status === Status.Correct);
  const gameLost = numberOfGuesses === NUM_OF_GUESSES_ALLOWED && !gameWon;
  const gameOver = gameWon || gameLost;

  const resetGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setKeyboardStatus(initKeyboardStatus);
  }

  return {
    answer,
    gameOver,
    gameWon,
    guesses,
    keyboardStatus,
    numberOfGuesses,
    resetGame,
    setGuesses,
  };
};
