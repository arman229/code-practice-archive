import React, { useContext } from "react";
import { TodoContextType, todoContext } from "./TodoContext";
import { Todo } from "./store";

const TodoList = () => {
  const {todos} = useContext<TodoContextType>(todoContext);

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;

interface TodoProp {
  todo: Todo;
}
const Todo: React.FC<TodoProp> = ({ todo }) => {
    const { edit, deleteTodo, changeStatus } = useContext(todoContext);

    const onChangeStatusClicked = () => {
        const newStatus = todo.status === "PENDING" ? "COMPLETED" : "PENDING";
        changeStatus({ ...todo, status: newStatus });
    };

    return (
        <div>
            <h1>{todo.title}</h1>
            <button onClick={() => edit(todo)}>Edit</button>
            <button onClick={() => deleteTodo(todo)}>Delete</button>
            <button onClick={onChangeStatusClicked}>{todo.status}</button>
        </div>
    );
};
