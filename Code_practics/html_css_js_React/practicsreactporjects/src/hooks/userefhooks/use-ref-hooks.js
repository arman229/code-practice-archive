import { useRef, useState } from "react";


const UseRefHook = () => {
    const inputElement = useRef(null)
    const [inputValue, setInputValue] = useState('')
   


    const updateParagraph = () => {
        const inputValue2 = inputElement.current.value;
        setInputValue(inputValue2)
    }

    return (<>

        <input ref={inputElement} type="text" value={inputValue} onChange={updateParagraph}>
        </input>
        <p>{inputValue}</p>
    </>);
}

export default UseRefHook;