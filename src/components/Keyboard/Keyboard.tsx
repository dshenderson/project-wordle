import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { QUERTY_KEYS } from 'src/constants';
import { IKeyboardStatus } from 'src/types';

interface IKeyboardProps {
  keyboardStatus: IKeyboardStatus;
  setGuess: Dispatch<SetStateAction<string>>;
}

export const Keyboard = ({ keyboardStatus, setGuess }: IKeyboardProps) => {
  const clickHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;

    if (value === '⏎' ) {
      // do nothing
    } else if (value === '⌫') {
      setGuess(prevGuess => prevGuess.substring(0, prevGuess.length - 1));
    } else {
      setGuess(prevGuess => (prevGuess + value));
    }
  };

  return (
    <div className="keyboard-wrapper">
      {
        QUERTY_KEYS.map((row) => (
          <div className="keyboard-row" key={`row-${row.join('')}`}>
            {
              row.map(letter => {
                return (
                <button className={`keyboard-key ${keyboardStatus[letter as keyof typeof keyboardStatus]?.status}`} onClick={clickHandler} type={letter === '⏎' ? 'submit' : 'button'} value={letter} key={letter}>{letter}</button>
              )})
            }
          </div>
        ))
      }
    </div>
  );
};
