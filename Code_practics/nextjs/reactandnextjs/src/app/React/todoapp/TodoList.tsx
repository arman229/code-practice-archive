import React, { useContext } from "react";
import { TodoContextType, todoContext } from "./TodoContext";
import { Todo } from "./store";

const TodoList = () => {
  const ctx = useContext<TodoContextType>(todoContext);

  return (
    <>
      {ctx.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;

interface TodoProp {
  todo: Todo;
}
const Todo: React.FC<TodoProp> = (props) => {
  const ctx = useContext<TodoContextType>(todoContext);
  const todo = props.todo;
  const onChangeStatusClicked = () => {
    const newStatus = todo.status == "PENDING" ? "COMPLETED" : "PENDING";
    ctx.changeStatus({ ...todo, status: newStatus });
  };
  return (
    <div>
      <h1>{todo.title}</h1>
      <button
        onClick={() => {
          ctx.edit(todo);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          ctx.delete(todo);
        }}
      >
        Delete
      </button>
      <button onClick={onChangeStatusClicked}>{todo.status}</button>
    </div>
  );
};
