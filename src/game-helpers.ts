/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

enum Status {
  Correct = 'correct',
  Incorrect = 'incorrect',
  Misplaced = 'misplaced',
}

interface IResult {
  letter: string;
  status: Status;
}

export function checkGuess(guess: string, answer: string) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = '✓';

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  const result: IResult[] = [];

  // Step 1: Look for correct letters.
  guessChars.forEach((char, idx) => {
    if (guessChars[idx] === answerChars[idx]) {
      result[idx] = {
        letter: guessChars[idx],
        status: Status.Correct,
      };
      answerChars[idx] = SOLVED_CHAR;
      guessChars[idx] = SOLVED_CHAR;
    }
  });

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  guessChars.forEach((char, idx) => {
    if (guessChars[idx] === SOLVED_CHAR) {
      return;
    }

    const misplacedIdx = answerChars.indexOf(char);
    let status = Status.Incorrect;
    
    if (misplacedIdx >= 0) {
      status = Status.Misplaced;
      answerChars[misplacedIdx] = SOLVED_CHAR;
    }

    result[idx] = {
      letter: guessChars[idx],
      status,
    };
  });

  return result;
}
