import React, { useContext } from "react";
import { todoContext } from "./TodoContext";
import { TodoContextType } from "./TodoContext";

function SerachBar() {
  const ctx = useContext<TodoContextType>(todoContext);

  return (
    <div>
      <input
        type="text"
        className="border"
        value={ctx.query}
        onChange={(e) => ctx.setQuery(e.target.value)}
      />
    </div>
  );
}

export default SerachBar;
