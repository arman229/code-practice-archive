import {useContext} from "react";
import {UserContext} from "../App";

const Child1 = () => {
    const un = useContext(UserContext)
    return (
        <>
            <h1>child1</h1>
            <Child1SubChild1 username={un.username}/>
        </>
    )
}
export {Child1}

const Child1SubChild1 = () => {
    const un = useContext(UserContext)
    return (
        <>
            <h1>Child1SubChild1 :{un.username}</h1>
        </>
    )
}