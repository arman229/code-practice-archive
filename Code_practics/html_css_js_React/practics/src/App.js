import './App.css';
import {Child1} from "./components/Child1";
import {Child2} from "./components/Child2";
import {createContext, useState} from "react";
import {Contextapiparant} from "./components/contextapiparant";

export const UserContext = createContext({})

function App() {

    const [username, setusername] = useState("")

    function onNameChange(newName) {
        setusername(newName)
    }

    return (
    <>
        <UserContext.Provider value={{username:username,onNameChange:onNameChange}}>
            <div className="App">
                <h1>in Parent:{username} </h1>
                <Child1/>
                <Child2/>
            </div>
        </UserContext.Provider>
        <Contextapiparant/></>
    );
}

export default App;
