import { range } from "src/utils";

export const Guess = () => {
  return <div className="guess">
    {range(5).map(() => (
      <span className="cell"></span>
    ))}
  </div>;
};
