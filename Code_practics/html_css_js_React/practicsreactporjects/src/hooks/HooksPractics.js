import {useContext, useRef, useState} from "react";
import {appContext} from "../App";

export const MyHeader = () => {
    const appData = useContext(appContext)
    return (
        <>
            <h1 >Random Number {appData.value}</h1>
            <MyHeaderSub/>
        </>
    )
}

export const MyHeaderSub = () => {
    const appData = useContext(appContext)
    var s = "dsaf"
    return (
        <>

            <button onClick={() => {
                appData.callabck(s)
            }}>update
            </button>
        </>
    )
}

export const InputComponet = () => {

    const nameRef = useRef("sd")
    return (
        <>
            <p>dsfafsd+{nameRef.current}</p>
            <input  />
        </>
    )
}