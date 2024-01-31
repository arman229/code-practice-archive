'use client'
import React from 'react';

export const  MyButton = ({onclick,children}:any) => {
    return (
        <>
            <button onClick={onclick} className={'border bg-blue-400 text-white p-4'}>{children}</button>


        </>
    );
} 