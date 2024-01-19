'use client'
import React, { useState } from 'react';

const Child = () => {
    const [value, setValue] = useState<number>(0);

    return (
        <>
            <h1>This is Child value {value}</h1>
            <button onClick={(e) => setValue((value) => value + 1)}>Child Button</button>
        </>
    );
};

export default Child;