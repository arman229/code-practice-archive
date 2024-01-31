"use client";
import React, { useState, createContext, useEffect, useReducer } from "react";
import SerachBar from "./SerachBar";
import AddInputField from "./AddInputField";
import { TodoContextType, todoContext } from "./TodoContext";
import TodoList from "./TodoList";
import { Todo } from "./store";
var globalId = 4;
function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [query, setQuery] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [lastEdited, setLastedEdit] = useState<Todo | null>(null);
  
  const finalTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );

  const onAdd = () => {
    if (lastEdited === null) {
      var newId = ++globalId;
      const newTodo: Todo = { id: newId, title: title, status: "PENDING" };
      setTodos([...todos, newTodo]);
    } else {
      const updatedTodo: Todo = { ...lastEdited, title: title };
      const finalTodos: Todo[] = todos.map((t) => {
        if (t.id == lastEdited.id) {
          return updatedTodo;
        } else {
          return t;
        }
      });
      setTodos(finalTodos);
    }
    setLastedEdit(null);
    setTitle("");
  };
  const onEdit = (todo: Todo) => {
    console.log("on edit id:" + todo.id);
    setLastedEdit(todo);
    setTitle(todo.title);
  };

  const onDelete = (todo: Todo) => {
    const newTodos = todos.filter((t) => t.id != todo.id);
    setTodos(newTodos);
  };
  const onChangeStatus = (todo: Todo) => {
    const finalTodos: Todo[] = todos.map((t) => {
      if (t.id == todo.id) {
        return todo;
      } else {
        return t;
      }
    });
    setTodos(finalTodos);
  };

  const ctxObj: TodoContextType = {
    query: query,
    setQuery: (q: string) => setQuery(q),
    todos: finalTodos,
    edit: onEdit,
    delete: onDelete,
    changeStatus: onChangeStatus,
    title: title,
    setTitle: (t: string) => {
      setTitle(t);
    },
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
