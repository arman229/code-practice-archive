import React, {useContext} from "react";
import '../App.css';
import {UserContext} from "../App";

const BmiTable = () => {
    const cs = useContext(UserContext)
    const bmi = cs.bmi

    return (
        <>
            <table className="bmitable" style={{  margin: '10px auto', borderCollapse: "collapse"}}>
                <tr  >
                    <th>BMI</th>
                    <th> Status</th>
                </tr>
                <tr style={{ border: bmi < 18.4 ? '6px solid black' : 'none' }}>
                    <td> &le; 18.4</td>
                    <td> Underweight</td>
                </tr>
                <tr style={{ border: bmi > 18.4 && bmi < 24.9 ? '6px solid green' : 'none' }}>
                    <td>18.4-24.9</td>
                    <td>Normal</td>
                </tr>

                <tr style={{ border: bmi > 25.0 && bmi < 39.9 ? '6px solid green' : 'none' }}>
                    <td> 25.0-39.9</td>
                    <td> Overweight</td>
                </tr>
                <tr style={{ border:  bmi > 40 ? '6px solid green' : 'none' }}>
                    <td>&ge; 40.0 </td>
                    <td> Obese</td>
                </tr>
            </table>

        </>
    )
}
export {BmiTable}