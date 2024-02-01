import React, { useReducer, useState } from "react";
import { Action, State, initialValue } from "@/app/React/Dispatch/types";

export function reducerFun(state: State, action: Action) {
  switch (action.type) {
    case "FINDSQUARE":
      return {
        value: state.value,
        action: "Square",
        result: state.value * action.payload,
      };

    case "FINDCUBE":
      return {
        value: state.value,
        action: "Cube",
        result: state.value * action.payload,
      };

    case "FINDFORTH":
      return {
        value: state.value,
        action: "Forth",
        result: state.value * action.payload,
      };

    default:
      return {
        value: 0,
        action: "",
        result: 0,
      };
  }
}
