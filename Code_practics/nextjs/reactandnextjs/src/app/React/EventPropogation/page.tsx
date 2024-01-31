"use client";
import React, { useEffect } from "react";

function EventPropagation() {


  return (
    <div>
      <h1>By default event propagation (bubling)</h1>
      <div
        className="bg-red-400 flex gap-4 items-center"
        onClick={() => alert("this is the parent button")}
      >
        <button
          className="bg-blue-400"
          onClick={() => alert("this is the first button")}
        >
          first button
        </button>
        <button
          className="bg-orange-400"
          onClick={() => alert("this is the second button")}
        >
          second button
        </button>
      </div>

      <h1>Stop event propagation</h1>
      <div
        className="bg-red-400 flex gap-4 items-center"
        onClick={() => alert("this is the parent button")}
      >
        <button
          className="bg-blue-400"
          onClick={(e) => {
            e.stopPropagation();
            alert("this is the first button");
          }}
        >
          first button
        </button>
        <button
          className="bg-orange-400"
          onClick={(e) => {
            e.stopPropagation();
            alert("this is the second button");
          }}
        >
          second button
        </button>
      </div>
      <h1> event propagation </h1>
      <div id="root1" className="bg-red-400 flex gap-4 items-center">
        <button
          className="bg-blue-400"
          onClick={() => alert("this is the first button")}
        >
          first button
        </button>
        <button
          className="bg-orange-400"
          onClick={() => alert("this is the second button")}
        >
          second button
        </button>
      </div>
      <h1> event propagation (Capturing)</h1>
      <div id="root" className="bg-red-400 flex gap-4 items-center">
        <button
          className="bg-blue-400"
          onClick={() => alert("this is the first button")}
        >
          first button
        </button>
        <button
          className="bg-orange-400"
          onClick={() => alert("this is the second button")}
        >
          second button
        </button>
      </div>
    </div>
  );
}
export default EventPropagation;
