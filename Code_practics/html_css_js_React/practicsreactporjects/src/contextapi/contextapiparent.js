// ParentComponent.js
import React, { createContext, useState } from 'react';
import ChildComponent from './contextchild';

const DataContext = createContext();

const ParentComponent = () => {
    const [data, setData] = useState('');
    const [data1, setData1] = useState('');

    const handleDataReceived = (childData) => {
        setData(childData);
    };

    const handleDataReceived2 = (childData) => {
        setData1(childData);
    };

    return (
        <DataContext.Provider value={{ handleDataReceived, handleDataReceived2 }}>
            <div>
                <h1>Parent Component</h1>
                <p>Data received from child: {value.data} {value.data1}</p>
                <ChildComponent />
            </div>
        </DataContext.Provider>
    );
};

export default ParentComponent;
export { DataContext };
