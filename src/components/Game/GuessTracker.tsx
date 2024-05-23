interface IGuessesProps {
  guesses: (string | undefined)[];
}

export const GuessTracker = ({ guesses }: IGuessesProps) => guesses.length ? (
  <ul className="guess-results">
    {guesses.map(guess => (
      <li className="guess" key={guess}>{guess}</li>
    ))}
  </ul>
) : null;
