"use client";
import React, { useState } from "react";

const initialvalue = [
  {
    id: 1,
    type: "square",
    x: 50,
    y: 100,
  },
  {
    id: 2,
    type: "circle",
    x: 100,
    y: 100,
  },
  {
    id: 3,
    type: "square",
    x: 150,
    y: 100,
  },
];

function UpdatingArray() {
  const [value, setValue] = useState(initialvalue);

  const HandleCall = () => {
    const updatedValue = value.map((update) => ({
      ...update,
      y: update.y + 10,
    }));

    setValue(updatedValue);
  };

  return (
    <div className="bg-red-400">
      <button onClick={HandleCall}>move the circle</button>
     
      {value.map((i) => (
        <div
          key={i.id}
          style={{
            background: "purple",
            position: "absolute",
            left: i.x,
            top: i.y,
            borderRadius: i.type === "circle" ? "50%" : "",
            width: 20,
            height: 20,
          }}
        />
      ))}
    </div>
  );
}

export default UpdatingArray;
