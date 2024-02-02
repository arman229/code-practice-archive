"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";

interface ChildProps {
  children: ReactNode;
}
function LayouteRoute({ children }: ChildProps) {
  const [value, setValue] = useState<number>(0);
  return (
    <div>
      <p>value:{value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <div>{children}</div>
    
    </div>
  );
}

export default LayouteRoute;
