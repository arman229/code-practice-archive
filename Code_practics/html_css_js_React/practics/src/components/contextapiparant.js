import { Contextapi1 } from "./contextapisend";
import { Contextapi2 } from "./contextapirecive";
import { createContext } from "react";

const UserContext = createContext();

const Contextapiparant = () => {
    return (
        <UserContext.Provider value={"fixedvalue"}>
            <Contextapi1 />
            <Contextapi2 />
        </UserContext.Provider>
    );
}

export { Contextapiparant, UserContext };
