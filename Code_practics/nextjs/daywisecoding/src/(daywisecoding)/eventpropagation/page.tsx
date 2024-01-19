
'use client'
import React, { useState } from 'react';
import Child from '@/(daywisecoding)/eventpropagation/child';

const Propagation = () => {
    const [value, setValue] = useState<number>(0);

    return (
        <>
            <h1>This is parent value {value}</h1>
            <button onClick={(e) => setValue(  value + 2)}>Parent Button</button>
            <Child />
        </>
    );
};

export default Propagation;