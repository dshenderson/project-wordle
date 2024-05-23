import { ChangeEvent, FormEvent, useState } from 'react';

export const GuessInput = () => {
  const [guess, setGuess] = useState('');

  const handleGuess = (e: ChangeEvent<HTMLInputElement>) => setGuess(e.currentTarget.value.toUpperCase());

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ guess });
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" pattern='[A-Z]{5}' value={guess} onChange={handleGuess} />
    </form>
  );
};
