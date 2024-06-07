import { BannerVariant } from 'src/enums';
import { RestartButton } from '../RestartButton';

interface IBannerProps {
  answer: string;
  numberOfGuesses: number;
  resetGame: () => void;
  variant: BannerVariant;
}

export const Banner = ({ answer, numberOfGuesses, resetGame, variant }: IBannerProps) => (
  <div className={`${variant} banner`}>
    {
      variant === BannerVariant.Happy ? (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numberOfGuesses} guesses</strong>.
        </p>
      ) : (
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      )
    }
    <RestartButton clickHandler={resetGame} />
  </div>
);
