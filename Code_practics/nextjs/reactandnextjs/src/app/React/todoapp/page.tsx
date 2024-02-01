"use client";
import React, { useState, createContext, useEffect, useReducer } from "react";
import SerachBar from "./SerachBar";
import AddInputField from "./AddInputField";
import { TodoContextType, todoContext } from "./TodoContext";
import TodoList from "./TodoList";
import { Todo, Action } from "./store";
var globalId = 4;
function TodoApp() {
  const [query, setQuery] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [lastEdited, setLastedEdit] = useState<Todo | null>(null);

  const [todos1, dispatch]: [todos: Todo[], dispatch: (action: Action) => void] =
    useReducer(reducerFun, []);

  const finalTodos = todos1.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );

  function reducerFun(todos: Todo[], action: Action) {
    switch (action.type) {
      case "ONADD":
        var res: Todo[] = [];
        if (lastEdited === null) {
          var newId = ++globalId;
          const newTodo: Todo = { id: newId, title: title, status: "PENDING" };
          res = [...todos, newTodo];
        } else {
          const updatedTodo: Todo = { ...lastEdited, title: title };
          const finalTodos: Todo[] = todos.map((t) => {
            if (t.id == lastEdited.id) {
              return updatedTodo;
            } else {
              return t;
            }
          });
          res = finalTodos;
        }
        setLastedEdit(null);
        setTitle("");
        return res;
      case "ONEDIT":
        setLastedEdit(action.payload);
        setTitle(action.payload!!.title);
        return todos;
      case "ONDELETE":
        return todos.filter((t) => t.id != action.payload!!.id);
      case "MARKASDONE":
        return todos.map((t) => {
          if (t.id == action.payload!!.id) {
            return action.payload!!;
          } else {
            return t;
          }
        });
      default:
        return todos;
    }
  }
  const onAdd = () => {
    dispatch({ type: "ONADD", payload: null });
  };
  const onEdit = (todo: Todo) => {
    dispatch({ type: "ONEDIT", payload: todo });
  };

  const onDelete = (todo: Todo) => {
    dispatch({ type: "ONDELETE", payload: todo });
  };
  const onChangeStatus = (todo: Todo) => {
    dispatch({ type: "MARKASDONE", payload: todo });
  };

  const ctxObj: TodoContextType = {
    query: query,
    setQuery: setQuery,
    todos: finalTodos,
    edit: onEdit,
    deleteTodo: onDelete,
    changeStatus: onChangeStatus,
    title: title,
    setTitle: setTitle,
    add: onAdd,
  };
  return (
    <todoContext.Provider value={ctxObj}>
      <div className="p-3 bg-blue-600 flex justify-around">
        <div className="text-bold">TodoApp</div>
        <SerachBar />
      </div>
      <AddInputField />
      <TodoList />
    </todoContext.Provider>
  );
}

export default TodoApp;
