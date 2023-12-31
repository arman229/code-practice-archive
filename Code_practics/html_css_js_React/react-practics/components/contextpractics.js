import React, {useContext} from "react";
import {Typography} from "@mui/material";
import {NameContext} from "./practics5";


export const Child1 = () => {
    return (
        <>
            <Child2/></>
    )
}

export const Child2 = () => {
    const {input,age,onAgeClick} = useContext(NameContext)
    return (
        <Typography variant={"h3"} onClick={onAgeClick}>{input} age {age}</Typography>
    )
}