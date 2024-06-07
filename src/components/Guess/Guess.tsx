import { range } from "src/utils";

interface IGuessProps {
  guess?: string;
}

export const Guess = ({ guess = '' }: IGuessProps) => {
  const letters = guess.split('');

  return <div className="guess">
    {range(5).map((_, idx) => (
      <span className="cell" key={'cell-' + idx}>{ letters[idx] ?? '' }</span>
    ))}
  </div>;
};
