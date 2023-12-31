import React, {useContext, useState} from "react";
import {Button} from "@mui/material";
import '../App.css';
import {UserContext} from "../App";
import {
    containerStyles,
    inchesInputStyles,
    inputStyles,
    selectOptionStyles,
    selectStyles,
    selectstylesparant
} from "./bmiStyles";

const UserInputPage = () => {
    const [weight, setWeight] = useState(0);
    const [feet, setFeet] = useState(0);
    const [inches, setInches] = useState(0);
    const [weightOption, setWeightOption] = useState("Kilograms");
    const [heightOption, setHeightOption] = useState("feet");

    const Clearvalues = () => {
        setFeet("")
        setInches("")
        setWeight("")
    }

    const calculateBMI = () => {
        // setShowComponents(true);
        let weightKg = parseFloat(weight);
        const heightInchesFeetCmMeter = parseFloat(feet);
        var heightInches = parseFloat(inches);
        if (weightOption === "pounds") {
            weightKg = weightKg * 0.45359237;
        } else if (weightOption === "stones(+Ib)") {
            weightKg = weightKg * 6.35029318;
        }
        var heightMeters
        if (heightOption === "feet") {
            const totalInches = heightInchesFeetCmMeter * 12 + heightInches;
            heightMeters = totalInches * 0.0254;
        } else if (heightOption === "inches") {
            heightMeters = heightInchesFeetCmMeter * 0.0254;
        } else if (heightOption === "centimeters") {
            heightMeters = heightInchesFeetCmMeter / 100;
        } else if (heightOption === "meters") {
            heightMeters = heightInchesFeetCmMeter;
        }
        const bmiValue = weightKg / (heightMeters * heightMeters);
        let newBmi = bmiValue.toFixed(2);
        usercontext.onDataChange(newBmi)

    };


    const usercontext = useContext(UserContext);


    return (
        <div>
            <div style={containerStyles}>
                <div style={selectstylesparant}>Calculate BMI for

                </div>

                <div style={selectstylesparant}>weight
                    <input required style={inputStyles} type={"number"}
                           value={weight}
                           onChange={(e) => setWeight(e.target.value)}
                    />
                    <select id="weightOption" style={selectOptionStyles} value={weightOption}
                            onChange={(e) => setWeightOption(e.target.value)}>
                        <option value="Kilograms">Kilograms</option>
                        <option value="pounds">pounds</option>
                        <option value="stones(+Ib)">stones(+Ib)</option>
                    </select>
                </div>
                <div style={selectstylesparant}>height
                    <input style={inputStyles} type={"number"} value={feet}
                           onChange={(e) => setFeet(e.target.value)}/>
                    <select id="heightOption" style={selectOptionStyles}
                            value={heightOption}
                            onChange={(e) => setHeightOption(e.target.value)}>
                        <option value="feet">feet</option>
                        <option value="inches">inches</option>
                        <option value="centimeters">centimeters</option>
                        <option value="meters">meters</option>
                    </select>
                </div>
                {(heightOption == "feet") &&
                    <div style={{marginBottom: " 15px", display: 'flex', justifyContent: "space-around"}}>inches
                        <input style={inchesInputStyles} type={"number"} value={inches}
                               onChange={(e) => setInches(e.target.value)}/>
                    </div>}

            </div>
            <div style={{display: "flex", justifyContent: 'space-between'}}>
                <Button style={{color: "black"}} variant="contained" onClick={Clearvalues}>Clear</Button>
                <Button style={{color: "black"}} variant="contained" onClick={calculateBMI}>Calculate</Button>
                 </div>

        </div>
    );
}

export default UserInputPage;
