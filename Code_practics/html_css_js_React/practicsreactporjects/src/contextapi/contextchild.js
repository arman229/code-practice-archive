
import React, { useContext } from 'react';
import { DataContext } from './contextapiparent';

const ChildComponent = () => {
    const sendData = useContext(DataContext);

    const handleClick = () => {
        sendData('Hello from child!');
    };

    return (
        <div>
            <button onClick={handleClick}>Send Data</button>
        </div>
    );
};

export default ChildComponent;
