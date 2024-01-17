'use client'
import {useContext, useState} from "react";
import {UserContext} from "@/app/layout";

const InnerChild = () => {
    let usrctx = useContext(UserContext)
    return (
        <>
            <div>
                test page
                <ul>
                    {usrctx.names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default InnerChild