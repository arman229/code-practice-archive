export default interface initalValueProps {
  val: number;
  squareVal: number;
}
export interface Action {
  type: string;
  payload: number;
}
export interface State {
  value: number;
  action: string;
  result: number;
}
export const initialValue: State = { value: 2, action: "", result: 2 };
