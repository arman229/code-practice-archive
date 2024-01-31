'use client'
import React from 'react';
import {MyButton} from "@/app/React/ChildrenProps/button";

const Toolbar = ({onplayclick,onuplaodimage}:any) => {
    return (
        <div className={'flex gap-4'}>
            <MyButton onclick={onplayclick} >Play Movie</MyButton>
            <MyButton  onclick={onuplaodimage}> Upload Image</MyButton>
        </div>
    );
}

export default Toolbar;