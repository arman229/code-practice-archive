'use client'
import React from 'react';
import Toolbar from "@/app/React/ChildrenProps/toolbar";

const RespondingToEvents = ({onplayclick,onuplaodimage}:any) => {
    return (
        <>
            <Toolbar onplayclick={()=>alert('show the play movie')} onuplaodimage={()=>alert('Upload the Image ')}/>
        </>
    );
}

export default RespondingToEvents;