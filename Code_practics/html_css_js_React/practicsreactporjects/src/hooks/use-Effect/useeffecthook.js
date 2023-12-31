import React from "react";

export const UseEffectHooks = () => {
    const [count, increment, decrement] = useCounter(3)

    return (
        <>
            <button type="button" onClick={increment}>Incr</button>
            <button type="button" onClick={decrement}> decr</button>
            <p>{count}</p>
        </>
    );
}

function useCounter(defaultValue = 0) {
    const [counter, setCounter] = React.useState(defaultValue);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };
    return [counter, increment, decrement]
}
