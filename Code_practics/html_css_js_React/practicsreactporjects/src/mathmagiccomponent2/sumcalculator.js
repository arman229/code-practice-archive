import React, {useState} from 'react';
import './sumcalculator.css'
import {TextField, Typography} from "@mui/material";
import {Container, Button,Grid} from '@mui/material';
import AppBarExample from "./headerfooter/header";
import Footer from "./headerfooter/footer";

export const Mysummagicgames = () => {
    const [rerenderToggle, setRerenderToggle] = useState(false);

    const resetValues = () => {
        setInputValue11('');
        setInputDisabled11(false);
        setInputValue12('');
        setInputDisabled12(false);
        setInputValue13('');
        setInputDisabled13(false);
        setInputValue14('');
        setInputDisabled14(false);
        setInputValue21('');
        setInputDisabled21(false);
        setInputValue22('');
        setInputDisabled22(false);
        setInputValue23('');
        setInputDisabled23(false);
        setInputValue24('');
        setInputDisabled24(false);
        setInputValue31('');
        setInputValue32('');
        setInputValue33('');
        setInputValue34('');
        setInputValue41('');
        setInputDisabled41(false);
        setInputValue42('');
        setInputDisabled42(false);
        setInputValue43('');
        setInputDisabled43(false);
        setInputValue44('');
        setInputDisabled44(false);
        setInputValue51('');
        setInputValue52('');
        setInputValue53('');
        setInputValue54('');
    };

    const handleRestartClick = () => {
        resetValues();
        setRerenderToggle(!rerenderToggle);
    };


    const [inputValue11, setInputValue11] = useState("");
    const [inputDisabled11, setInputDisabled11] = useState(false);
    const [inputValue12, setInputValue12] = useState("");
    const [inputDisabled12, setInputDisabled12] = useState(false);
    const [inputValue13, setInputValue13] = useState("");
    const [inputDisabled13, setInputDisabled13] = useState(false);
    const [inputValue14, setInputValue14] = useState("");
    const [inputDisabled14, setInputDisabled14] = useState(false);
    const [inputValue21, setInputValue21] = useState("");
    const [inputDisabled21, setInputDisabled21] = useState(false);
    const [inputValue22, setInputValue22] = useState("");
    const [inputDisabled22, setInputDisabled22] = useState(false);
    const [inputValue23, setInputValue23] = useState("");
    const [inputDisabled23, setInputDisabled23] = useState(false);
    const [inputValue24, setInputValue24] = useState("");
    const [inputDisabled24, setInputDisabled24] = useState(false);
    const [inputValue31, setInputValue31] = useState("");
    const [inputValue32, setInputValue32] = useState("");
    const [inputValue33, setInputValue33] = useState("");
    const [inputValue34, setInputValue34] = useState("");
    const [inputValue41, setInputValue41] = useState("");
    const [inputDisabled41, setInputDisabled41] = useState(false);
    const [inputValue42, setInputValue42] = useState("");
    const [inputDisabled42, setInputDisabled42] = useState(false);
    const [inputValue43, setInputValue43] = useState("");
    const [inputDisabled43, setInputDisabled43] = useState(false);
    const [inputValue44, setInputValue44] = useState("");
    const [inputDisabled44, setInputDisabled44] = useState(false);
    const [inputValue51, setInputValue51] = useState("");
    const [inputValue52, setInputValue52] = useState("");
    const [inputValue53, setInputValue53] = useState("");
    const [inputValue54, setInputValue54] = useState("");
    const firstlineconcate = (parseFloat(inputValue11 + '' + inputValue12 + '' + inputValue13 + '' + inputValue14) + 9999 + 9999).toString();
    console.log(firstlineconcate)
    const numbers = [firstlineconcate.charAt(0), firstlineconcate.charAt(1), firstlineconcate.charAt(2), firstlineconcate.charAt(3), firstlineconcate.charAt(4)]

    return (
        <div  >
        <AppBarExample/>
        <Grid classname="mycontainer" container style={{marginLeft: "auto", marginRight: "auto", padding:"50px 0px" ,  }}>


            <div id="firstsubcontainer">
                <
                Typography variant="h5" style={{backgroundColor: "#7885cb", padding: "10px"}}>
                Magic Game Instructions:
            </Typography>
                <div style={{padding:"6px"}}>




                        <Typography variant="body1" component="div" gutterBottom>
                            <strong>Step 1:</strong> Enter numbers in the input boxes on the first line. The
                            calculator will automatically calculate the magic sum for you. Remember or jot down
                            this magic sum in your notebook.
                        </Typography>

                        <Typography variant="body1" component="div" gutterBottom>
                            <strong>Step 2:</strong> Fill the input boxes on the second and fourth lines with
                            any numbers you choose.
                        </Typography>

                        <Typography variant="body1" component="div" gutterBottom>
                            <strong>Step 3:</strong> Calculate the sum of all numbers from all five lines.
                        </Typography>

                        <Typography variant="body1" component="div">
                            <strong>Final Step:</strong> Compare the sum you calculated in Step 3 with the magic
                            sum from Step 1.
                        </Typography>
                    </div>

            </div>


            <div id="secondsubcontainer">

                <Button   onClick={handleRestartClick} style={{width:"100%",backgroundColor: "#7885cb",}}   size="large" variant="contained">Restart / Play again</Button>
                <div>

                    <div>
                        <input type="number"
                               className="input_number"
                               value={inputValue11}
                               disabled={inputDisabled11}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue11(inputValue)
                                       setInputDisabled11(true);


                                   }
                               }}


                        />

                        <input type="number"
                               className="input_number"
                               value={inputValue12}
                               disabled={inputDisabled12}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue12(inputValue)
                                       setInputDisabled12(true);

                                   }
                               }}


                        />
                        <input type="number"
                               className="input_number"
                               value={inputValue13}
                               disabled={inputDisabled13}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue13(inputValue)
                                       setInputDisabled13(true);

                                   }
                               }}


                        />
                        <input type="number"
                               className="input_number"
                               value={inputValue14}
                               disabled={inputDisabled14}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue14(inputValue)
                                       setInputDisabled14(true);

                                   }
                               }}


                        />

                    </div>
                    <div>
                        <input type="number"
                               className="input_number"
                               value={inputValue21}
                               disabled={inputDisabled21}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue21(inputValue)
                                       setInputDisabled21(true);

                                         setInputValue31(9 - inputValue);

                                   }
                               }}


                        />
                        <input type="number"
                               className="input_number"
                               value={inputValue22}
                               disabled={inputDisabled22}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue22(inputValue)
                                       setInputDisabled22(true);

                                           setInputValue32(9 - inputValue);

                                   }
                               }}


                        />
                        <input type="number"
                               className="input_number"
                               value={inputValue23}
                               disabled={inputDisabled23}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue23(inputValue)
                                       setInputDisabled23(true);

                                           setInputValue33(9 - inputValue);

                                   }
                               }}


                        />
                        <input type="number"
                               className="input_number"
                               value={inputValue24}
                               disabled={inputDisabled24}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue24(inputValue)
                                       setInputDisabled24(true);

                                           setInputValue34(9 - inputValue);

                                   }
                               }}


                        />

                    </div>
                    <div>
                        <input type="number" disabled
                               className="input_number"
                               value={inputValue31}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue31(inputValue)
                                   }
                               }}


                        />
                        <input type="number" disabled
                               className="input_number"
                               value={inputValue32}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue32(inputValue)
                                   }
                               }}


                        />
                        <input type="number" disabled
                               className="input_number"
                               value={inputValue33}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue33(inputValue)
                                   }
                               }}


                        />
                        <input type="number" disabled
                               className="input_number"
                               value={inputValue34}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue34(inputValue)
                                   }
                               }}


                        />

                    </div>
                    <div>
                        <input type="number"
                               className="input_number"
                               value={inputValue41}
                               disabled={inputDisabled41}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue41(inputValue)
                                       setInputDisabled41(true);

                                           setInputValue51(9 - inputValue);

                                   }
                               }}


                        />
                        <input type="number"
                               className="input_number"
                               value={inputValue42}
                               disabled={inputDisabled42}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue42(inputValue)
                                       setInputDisabled42(true);

                                           setInputValue52(9 - inputValue);

                                   }
                               }}


                        />
                        <input type="number"
                               className="input_number"
                               value={inputValue43}
                               disabled={inputDisabled43}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue43(inputValue)
                                       setInputDisabled43(true);

                                           setInputValue53(9 - inputValue);

                                   }
                               }}


                        />
                        <input type="number"
                               className="input_number"
                               value={inputValue44}
                               disabled={inputDisabled44}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue44(inputValue)
                                       setInputDisabled44(true);

                                           setInputValue54(9 - inputValue);

                                   }
                               }}


                        />

                    </div>
                    <div>
                        <span>+</span>

                        <input type="number" disabled
                               className="input_number"
                               value={inputValue51}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue51(inputValue)
                                   }
                               }}


                        />
                        <input type="number" disabled
                               className="input_number"
                               value={inputValue52}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue52(inputValue)
                                   }
                               }}


                        />
                        <input type="number" disabled
                               className="input_number"
                               value={inputValue53}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue53(inputValue)
                                   }
                               }}


                        />
                        <input type="number" disabled
                               className="input_number"
                               value={inputValue54}
                               onChange={(event) => {
                                   let inputValue = event.target.value;
                                   const floatValue = parseFloat(inputValue);
                                   if ((floatValue >= 0 && floatValue <= 9) || isNaN(floatValue)) {
                                       setInputValue54(inputValue)
                                   }
                               }}


                        />

                    </div>

                    <div>
                        {!isNaN(parseInt(inputValue11)) && !isNaN(parseInt(inputValue12)) && !isNaN(parseInt(inputValue13)) && !isNaN(parseInt(inputValue14))? (
                            <div id="solutioncontainer">
                                {numbers.map((number, index) => (
                                    <input
                                        key={index}
                                        type="number"
                                        disabled
                                        className="input_number"
                                        min="0"
                                        max="9"
                                        maxLength="1"
                                        value={number}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div id="solutioncontainer">
                                <input type="number" disabled className="input_number" min="0" max="9"
                                       maxLength="1"/>
                                <input type="number" disabled className="input_number" min="0" max="9"
                                       maxLength="1"/>
                                <input type="number" disabled className="input_number" min="0" max="9"
                                       maxLength="1"/>
                                <input type="number" disabled className="input_number" min="0" max="9"
                                       maxLength="1"/>
                                <input type="number" disabled className="input_number" min="0" max="9"
                                       maxLength="1"/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Grid>
            <Footer/>
        </div>
    )
}