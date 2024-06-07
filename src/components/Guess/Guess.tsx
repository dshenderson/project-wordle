import { range } from 'src/utils';
import { Status } from 'src/enums';

interface IValidatedGuess {
  letter: string;
  status: Status;
}

interface IGuessProps {
  validatedGuess: IValidatedGuess[] | null;
}

export const Guess = ({ validatedGuess }: IGuessProps) => (
  <div className="guess">
    {range(5).map((_, idx) => {
      const letter = validatedGuess?.[idx].letter ?? '';
      const classname = validatedGuess ? `cell ${validatedGuess[idx].status}` : 'cell';
      return (
        <span className={classname} key={'cell-' + idx}>{ letter }</span>
      );
    })}
  </div>
);
