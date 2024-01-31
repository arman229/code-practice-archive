 'use client'
import React, {createContext, useState} from 'react';
import Button from "@/(daywisecoding)/addinginteractivityy/button";
import Contant from "@/(daywisecoding)/addinginteractivityy/contant";
import {sculptureList} from "@/(daywisecoding)/addinginteractivityy/data";

const Mycontext=createContext( )
const AddingInteractivity = () => {

    const [data, setDate ]=useState(sculptureList)


    return (
        <Mycontext.Provider value={{Data:data}}>
            <Button/>
            <Contant/>
        </Mycontext.Provider>
    );
}

export default AddingInteractivity;