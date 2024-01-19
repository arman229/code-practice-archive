'use client'
import React from 'react';

const MyButton = ({onclick,children}) => {
    return (
        <>
            <button onClick={onclick} className={'border bg-blue-400 text-white p-4'}>{children}</button>


        </>
    );
}

export default MyButton;