import {InputComponet, MyHeader} from "./hooks/HooksPractics";
import {createContext, useState} from "react";
import {Parent} from "./contextapipractics/parent";
import Newcontextparant from "./contextapipractics/newcontextparant";


export const appContext = createContext({})

function App() {
    var [data, setData] = useState("23b")

    function myFun(p) {
        console.log("myfun" + p)
        setData(p)
    }

    return (
        <>
            {/*<appContext.Provider value={{value: data, callabck: myFun}}>*/}
            {/*    <MyHeader/>*/}
            {/*</appContext.Provider>*/}
            {/*<InputComponet/>*/}
            {/*<Parent/>*/}
            <Newcontextparant/>

        </>
    );
}

export default App
