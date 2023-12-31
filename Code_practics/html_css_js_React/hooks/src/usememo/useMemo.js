import {useMemo, useState} from "react";

const UseMemo = () => {
    console.log('Every time it render parant components')
    const [value, setUpdate] = useState(0)

    const MyUseMemo = useMemo(() => {
        return (<ChildComponent/>)
    }, [])

    return (<>
        <h1>{value}</h1>
        <button onClick={() => {
            setUpdate(value + 1)
        }}>update value
        </button>
        {MyUseMemo}
    </>);
}


const ChildComponent = () => {
    const [count, setCount] = useState(0)

    console.warn('Every time it render child components')


    return (<> <h3>{count}</h3>
        <button onClick={() => {
            setCount(count + 1)
        }}>not rerender
        </button>
    </>);
}


export default UseMemo;