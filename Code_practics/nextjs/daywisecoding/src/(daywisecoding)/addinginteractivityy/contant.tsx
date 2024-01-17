'use client'
import React, {useContext, useState} from 'react';
import {Mycontext} from "@/(daywisecoding)/addinginteractivityy/page";
import ShowhideButton from "./ShowhideButton";
import {sculptureList} from "@/(daywisecoding)/addinginteractivityy/data";

export var s = 0
const Contant = () => {
    const [selectedComponent, setSelectedComponent] = useState(0);
    const [show, setShow] = useState(false)
    const {Data} = useContext(Mycontext);
    const handleButtonClick = () => setShow(!show)
    const handlenextimg = () => setSelectedComponent(selectedComponent< sculptureList.length-1 ? selectedComponent + 1:0)
    const data = Data[selectedComponent]
    return (
        <>
            <button className={'p-2 bg-red-400 text-white '} onClick={handlenextimg}>Next button</button>
            {<div>
                <h1 className={'text-2xl'}>{data.name}</h1>
                <button onClick={handleButtonClick}> {show ? 'show' : 'hideButton'}</button>
                {show && (<p>{data.description}</p>)}
                <img src={data.url} width={300} height={200}/>
            </div>}
        </>
    );
}

export default Contant;
