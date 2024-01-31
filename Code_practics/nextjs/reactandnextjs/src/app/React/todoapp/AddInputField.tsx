import React, { useContext, useState } from "react";
import { TodoContextType, todoContext } from "./TodoContext";
function AddInputField() {
  const ctx = useContext<TodoContextType>(todoContext);
  const onAdd = () => {
    ctx.add();
  };
  return (
    <div className="flex justify-center my-4">
      <input
        size={39}
        type="text"
        className="border"
        placeholder="Please add the title of the task"
        value={ctx.title}
        onChange={(e) => ctx.setTitle(e.target.value)}
      />
      <button onClick={onAdd}>Add Task</button>
    </div>
  );
}

export default AddInputField;
