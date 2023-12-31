import React, { createContext, useContext } from 'react';
import {Counter} from "./usereducer";

const UserContext = createContext();
const name = "Armanc ";

const Parent = () => {
    return (
        <UserContext.Provider value={name}>
            <p>This is the parent component, where data is transferred from parent to child components without prop drilling.</p>
            <Main />
        </UserContext.Provider>
    );
};

const Main = () => {
    const name = useContext(UserContext);

    return (
        <>
            <Counter sendData/>
            <Child1 />
            <p>This is the main component, and my name is {name}.</p>
        </>
    );
};

const Child1 = () => {
    const nadme = useContext(UserContext);

    return (
        <>
            <h1>This is Child1, and my name is {nadme}.</h1>
        </>
    );
};
export default UserContext;
export { Parent };
