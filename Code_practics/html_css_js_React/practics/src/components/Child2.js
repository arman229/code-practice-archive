import {useContext, useState} from "react";
import {UserContext} from "../App";

const Child2 = () => {
    const un = useContext(UserContext)


    function onChanged(e) {
        un.onNameChange(e.target.value)
    }

    return (
        <>
            <h1>child2</h1>
            <input value={un.username} onChange={onChanged}/>
        </>
    )
}
export {Child2}