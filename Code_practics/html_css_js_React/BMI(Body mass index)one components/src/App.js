import './App.css';
import React, {createContext, useState} from "react";
import UserInputPage from "./components/UserInputPage";
import {OutPutPage} from "./components/OutPutPage";
import {BmiTable} from "./components/BmiTable";
import {boxStyles, containerStyles, containerStylesApp, headingStyles, spanStyles} from "./components/bmiStyles";

const UserContext = createContext({})

function App() {

  const [bmi, setBmi] = useState(0);

  function onDataChange(newData) {
    setBmi(newData);
  }

  return (
      <>


        <UserContext.Provider value={{onDataChange: onDataChange, bmi: bmi}}>
          <div style={containerStylesApp}>
            <div style={boxStyles}>
              <h3 style={headingStyles}>
                Adult and Child <span style={spanStyles}>BMI</span> Calculator
              </h3>
              <UserInputPage/>
              <OutPutPage/>

            </div>
          </div>
        </UserContext.Provider>
      </>
  );

}

export {UserContext};
export default App;
