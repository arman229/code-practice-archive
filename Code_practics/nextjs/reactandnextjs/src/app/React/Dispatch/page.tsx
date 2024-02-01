"use client";
import React, { useReducer, useState } from "react";
import { Action, State, initialValue } from "@/app/React/Dispatch/types";
import { reducerFun } from "./temp";

function DispatchState() {
  const [obj, dispatch]: [State, (action: Action) => void] = useReducer(
    reducerFun,
    initialValue
  );

  return (
    <>
      <h1> Dispatch State</h1>
      <h1>
        Value={obj.value} action: {obj.action} and its reuslt {obj.result}
      </h1>
      <button onClick={() => dispatch({ type: "FINDSQUARE", payload: 2 })}>
        Find Square
      </button>
      <button onClick={() => dispatch({ type: "FINDCUBE", payload: 3 })}>
        Find Cube
      </button>
      <button onClick={() => dispatch({ type: "FINDFORTH", payload: 4 })}>
        Find Forth
      </button>
    </>
  );
}

export default DispatchState;
