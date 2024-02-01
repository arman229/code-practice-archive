import React, { useContext, useState } from "react";
import { TodoContextType, todoContext } from "./TodoContext";
function AddInputField() {
  const {title,setTitle,add}= useContext<TodoContextType>(todoContext);
  const onAdd = () => {
    add();
  };
  return (
    <div className="flex justify-center my-4">
      <input
        size={39}
        type="text"
        className="border"
        placeholder="Please add the title of the task"
        value={title}
        onChange={(e) =>  setTitle(e.target.value)}
      />
      <button onClick={onAdd}>Add Task</button>
    </div>
  );
}

export default AddInputField;
