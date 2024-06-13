import { Banner, GuessInput, GuessTracker } from 'src/components';
import { BannerVariant } from 'src/enums';
import { useGameValidation } from 'src/hooks';

export const Game = () => {
  const {
    answer,
    gameOver,
    gameWon,
    guesses,
    keyboardStatus,
    numberOfGuesses,
    resetGame,
    setGuesses,
  } = useGameValidation();

  const bannerVariant = gameWon ? BannerVariant.Happy : BannerVariant.Sad;

  return (
    <>
      {gameOver ? <Banner answer={answer} numberOfGuesses={numberOfGuesses} resetGame={resetGame} variant={bannerVariant} /> : null}
      <GuessTracker answer={answer} guesses={guesses} />
      <GuessInput gameOver={gameOver} guesses={guesses} keyboardStatus={keyboardStatus} setGuesses={setGuesses} />
    </>
  );
}
