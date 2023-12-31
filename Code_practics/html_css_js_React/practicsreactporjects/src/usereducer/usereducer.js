import React, {useContext} from "react";
import { Button } from '@mui/material';
import UserContext from "./usereducer2";
 const reducer = (state, action) => {

     switch(action.type){
         case "increment":
             return {value:state.value + 1}
         case "decrement":
             return {value:state.value - 1}
         default:
             return state
     }
 }



  const Counter = ( )=>{

     const fathername="ashraf"
     const [state, dispatch]=React.useReducer(reducer,{value:0})
      const increment = () => {
         dispatch({type:"increment"})
     };
      const decrement = () => {
          dispatch({type:"decrement"})
      };

      const name = useContext(UserContext);
     return (
         <>
         <h1>
             {state.value}

         </h1>
       <p>{name}</p>
             <Button variant={"contained"} onClick={increment}>INCREMENT</Button>
             <Button variant={"contained"} onClick ={decrement}>DECREMENT</Button>

         </>
     )

}
export {Counter}