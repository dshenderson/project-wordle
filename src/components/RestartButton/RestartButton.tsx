interface IButtonProps {
  clickHandler: () => void;
}

export const RestartButton = ({ clickHandler }: IButtonProps) => (
  <button className="button restart" onClick={clickHandler}>Play again</button>
);
