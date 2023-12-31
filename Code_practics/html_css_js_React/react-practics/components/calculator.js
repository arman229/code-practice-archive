import React, { useState } from 'react';

export function Calculator() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [result, setResult] = useState(0);

    const  InputChange1 = (e) => {
        setInputValue1(e.target.value);
    };

    const InputChange2 = (e) => {
        setInputValue2(e.target.value);
    };

    const handleCalculate = () => {
        const sum = parseInt(inputValue1) + parseInt(inputValue2);
        setResult(sum);
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100vw' }}>
            <div className="w-50 h-50 bg-danger p-3 " style={{ borderRadius: '20px' }}>

                <input type="number" value={inputValue1} onChange={InputChange1} />

                <input type="number" value={inputValue2} onChange={InputChange2} />
                <h1>Result: {result}</h1>
                <button onClick={handleCalculate}>Calculate</button>
            </div>
        </div>
    );
}
