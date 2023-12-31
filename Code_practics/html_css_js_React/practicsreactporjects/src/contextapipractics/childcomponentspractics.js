import {useContext} from "react";
import UserContext from "../usereducer/usereducer2";

const Childcomponentspractics=()=>{
    const variabel= useContext(UserContext)

   variabel.recivedata("senddata")
    return (
        <>
        <p>This is child components that is used to send data in parent components</p>
        </>
    )
}
export {Childcomponentspractics}