import { BannerVariant } from 'src/enums';

interface IBannerProps {
  answer: string;
  numberOfGuesses: number;
  variant: BannerVariant;
}

export const Banner = ({ answer, numberOfGuesses, variant }: IBannerProps) => (
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
  </div>
);
