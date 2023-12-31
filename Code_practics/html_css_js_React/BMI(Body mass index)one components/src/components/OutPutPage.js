import React, {useContext, useState} from "react";
import {BmiTable} from "./BmiTable";
import {UserContext} from "../App";

const OutPutPage = () => {
    const cs = useContext(UserContext)
    const [showComponents, setShowComponents] = useState(true);


    return (<>
        {showComponents && (<div style={{
            borderRadius: "20px",
            marginTop: "20px",
            textAlign: "center",
            border: "2px solid gray",
            backgroundColor: "white",
            padding: "10px"
        }}>
            <p style={{textAlign: "left"}}>Answer</p>
            <h3> Your BMI is {cs.bmi} </h3>
            <BmiTable/>

        </div>)}
    </>)
}
export {OutPutPage}