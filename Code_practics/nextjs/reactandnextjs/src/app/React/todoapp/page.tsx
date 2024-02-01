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
  const [todos1,dispatch]=useReducer(reducerFun,[])
  const finalTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );
 function reducerFun(todos1,action){
   switch (action.type){
       case 'ONADD':
       alert('Yor are pressing the enter button')
           break;
       case 'ONEDIT':
           alert('you are editing the todo')
           break;
       case 'ONDELETE':
           alert('Yor are deleting the todo')
           break;
       case 'MARKASDONE':
           alert('you are MARK  as done or not ')
           break;
       case 'ONSEARCH':
           alert('Now you are searching the item')
       default:
           return todos1
   }

 }
  const onAdd = () => {
   dispatch({type:'ONADD'})
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
      dispatch({type:'ONEDIT'})
    setLastedEdit(todo);
    setTitle(todo.title);
  };

  const onDelete = (todo: Todo) => {
      dispatch({type:'ONDELETE'})
    const newTodos = todos.filter((t) => t.id != todo.id);
    setTodos(newTodos);
  };
  const onChangeStatus = (todo: Todo) => {
      dispatch({type:'MARKASDONE'})
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
    deleteTodo: onDelete,
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
