'use client'
import React, { useState } from 'react';

const MyComponent = () => {
    // Define a state variable and its setter function
    const [count, setCount] = useState(0);
    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
    ];
    // Function to take a snapshot of the state
    const listItems = people.map(person => { return <><li>{person}</li> <li>{person}</li></>})
 
    //
    // const listItems = people.map(person =>   <><li>{person}</li> <li>{person}</li></> )
    // const listItems = people.map(person =>  ( <><li>{person}</li> <li>{person}</li></>))

    const takeSnapshot = () => {
        const snapshot = { count }; // Capture the current value of 'count'
        console.log('State Snapshot:', snapshot);
    };

    return <> <ul>{listItems}</ul>;
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={takeSnapshot}>Take Snapshot</button>
        </div>
    {101 && <p>New messages</p>}
        </>

};

export default MyComponent;
