import './usestatehook.css'
import {useState} from "react";

const UseStateHooks = () => {


    const [myValue, setMyValue] = useState('arman');

    const handleIncrement = () => {

     setMyValue('ashraf')
        // Note:Calling the handleIncrement function does not change the current state in the already executing code:

        console.log(`my name is ${myValue}`)



    };

    const handleDecrement = () => {
        setMyValue(prev => prev - 1)
    };

    return (
        <div className="container">
            <button className="button" onClick={handleIncrement}>
                +
            </button>
            <span className="value" id={"qwerty"}>{myValue}</span>
            <button className="button" onClick={handleDecrement}>
                -
            </button>
        </div>
    );
};

export default UseStateHooks;
