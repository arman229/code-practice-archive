export const storageData: Todo[] = [
  { id: 1, title: "one", status: "COMPLETED" },
  { id: 2, title: "two", status: "COMPLETED" },
  { id: 3, title: "three", status: "PENDING" },
];

export interface Todo {
  id: number;
  title: string;
  status: "COMPLETED" | "PENDING";
}
export interface Action {
  type: string;
  payload: Todo |null;
}
