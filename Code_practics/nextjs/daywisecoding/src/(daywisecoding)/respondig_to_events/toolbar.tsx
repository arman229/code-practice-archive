'use client'
import React from 'react';
import MyButton from "@/(daywisecoding)/respondig_to_events/Button";

const Toolbar = ({onplayclick,onuplaodimage}) => {
    return (
        <div className={'flex gap-4'}>
            <MyButton onclick={onplayclick} >Play Movie</MyButton>
            <MyButton  onclick={onuplaodimage}> Upload Image</MyButton>
        </div>
    );
}

export default Toolbar;