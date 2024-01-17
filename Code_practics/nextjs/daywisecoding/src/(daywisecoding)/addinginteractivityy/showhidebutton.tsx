import React from "react";
import {s} from "@/(daywisecoding)/addinginteractivityy/contant";

const ShowhideButton = ({onClick, index, selected}) => {

    return (
        <>

            <button onClick={() => onClick(index)}
                    className={'bg-blue-900'}> {selected ? 'show' : 'hideButton'}</button>
        </>
    )
}
export default ShowhideButton