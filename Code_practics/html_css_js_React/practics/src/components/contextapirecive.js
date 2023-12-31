import React, { useContext } from "react";
import { UserContext } from "./contextapiparant";

const Contextapi2 = () => {
    const value22 = useContext(UserContext);
    return (
        <>
            <h2>2 {value22}</h2>

            <Contextapi22/>
        </>
    );
}


const Contextapi22 = () => {
    const value22 = useContext(UserContext);
    return (
        <>
            <h2>2> {value22}</h2>
        </>
    );
}

export { Contextapi2 };
