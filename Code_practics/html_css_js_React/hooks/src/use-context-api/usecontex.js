import { createContext } from "react";
import Child1 from "./child1";
import Child2 from "./child2";
const userContext=createContext()
const UseContexApi = () => {
    return (<userContext.Provider>
        <Child1/>
    <Child2/>
    
    </userContext.Provider>  );
}
 
export default UseContexApi;