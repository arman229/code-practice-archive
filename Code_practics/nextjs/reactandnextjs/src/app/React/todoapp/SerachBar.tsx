import React, { useContext } from "react";
import { todoContext } from "./TodoContext";
import { TodoContextType } from "./TodoContext";

function SerachBar() {
  const {query,setQuery} = useContext<TodoContextType>(todoContext);

  return (
    <div>
      <input
        type="text"
        className="border"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SerachBar;
