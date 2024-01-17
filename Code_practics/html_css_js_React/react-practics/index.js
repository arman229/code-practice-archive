import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyTodoApp from "./todo/MyTodoApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MyTodoApp/>
    </React.StrictMode>
);











//
// function calFactorial(number) {
//     console.log("calFactorial")
//     return number * number
// }
// function sd(...a){
//     const d=[1,2,4,5]
//     const [b, ...c]=d
// }
// function MemoTest() {
//     sd(1,2,3,44,55)
//
//     const [number, setNumber] = useState({namef:"",age:0})
//
//     const [name, setName] = useState('')
//     const fact = useMemo(() => {
//         calFactorial(number)
//     }, [number])
//     // var fact=calFactorial(number)
//     const onNameChange = (e) => {
//         setName(e.target.value)
//
//     }
//     const onNumberChange = (e) => {
//         console.log("onNumberChange")
//         // setNumber(parseInt(e.target.value))
//         setNumber((prev)=>{
//            return {...prev,age: prev.age+1}  //{age:1}
//         })
//     }
//
//     return (
//         <>
//             <h1>Factorial of {number} is :{fact} </h1>
//             <input type={"number"} value={number} onChange={onNumberChange}/>
//             <input type={"text"} value={name} onChange={onNameChange}/>
//         </>
//
//     )
//
// }