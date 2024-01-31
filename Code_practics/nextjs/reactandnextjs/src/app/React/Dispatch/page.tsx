"use client";
import React, { useReducer, useState } from "react";
import { Action, State, initialValue } from "@/app/React/Dispatch/types";

function DispatchState() {
  const [value, dispatch] = useReducer(reducerFun, initialValue);
const [power,setPower]=useState<string>('')
  function reducerFun(value: State, action: Action) {
    console.log(action.type);
    switch (action.type) {
      case "FINDSQUARE":
        const newValue=value.val+1;
    
        return {
          ...value,
          val: newValue,
          squareVal: newValue *newValue,
        };
    

      default:
        return value;
    }
  }
  return (
    <>
      <h1> Dispatch State</h1>
      <h1>
        Value={value.val}&& its {power} is {value.squareVal}
      </h1>
      <button onClick={() => dispatch({ type: "FINDSQUARE" })}>Find Square</button>
      <button onClick={() => dispatch({ type: "addOne" })}>Find Cube</button>
      <button onClick={() => dispatch({ type: "addOne" })}>Find Forth</button>
    </>
  );
}

export default DispatchState;
