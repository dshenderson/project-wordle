import { Status } from 'src/enums';

export type GuessesArray = string[];

interface IStatus {
  status: Status | '';
}

export interface IKeyboardStatus {
  [key: string]: IStatus;
}

export interface IResult {
  letter: string;
  status: Status;
}
