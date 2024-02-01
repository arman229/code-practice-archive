import { createContext } from "react";
import { Todo } from "./store";

export interface TodoContextType {
  query: string;
  setQuery: (q: string) => void;
  todos: Todo[];
  edit: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
  changeStatus: (todo: Todo) => void;
  title: string;
  setTitle: (title: string) => void;
  add: () => void;
}

const defaultTodoContext: TodoContextType = {
  query: "",
  setQuery: (str: string) => {},
  todos: [],
  edit: (todo: Todo) => {},
  deleteTodo: (todo: Todo) => {},
  changeStatus: (todo: Todo) => {},
  title: "",
  setTitle: (title: string) => {},
  add: () => {},
};
export const todoContext = createContext<TodoContextType>(defaultTodoContext);
