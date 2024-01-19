'use client'
import React from 'react';
import Toolbar from "@/(daywisecoding)/respondig_to_events/toolbar";

const RespondingToEvents = ({onplayclick,onuplaodimage}) => {
    return (
        <>
            <Toolbar onplayclick={()=>alert('show the play movie')} onuplaodimage={()=>alert('Upload the Image ')}/>
        </>
    );
}

export default RespondingToEvents;