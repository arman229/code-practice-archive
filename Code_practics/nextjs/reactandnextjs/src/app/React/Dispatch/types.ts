export default interface initalValueProps {
  val: number;
  squareVal: number;
}
export interface Action {
    type:string
}
export interface State {
  val: number;
  squareVal: number;
}
export const initialValue: State = { val: 1, squareVal: 1 };
