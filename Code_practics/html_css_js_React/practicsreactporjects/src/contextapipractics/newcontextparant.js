// import React, { createContext, useContext, useState } from "react";
//
// const UserContext = createContext();
//
// const Newcontextparant = () => {
//     const [value, setValue] = useState('');
//
//     const handleValueChange = (newValue) => {
//         setValue(newValue);
//     };
//
//     const printValue = () => {
//         console.log(value);
//     };
//
//     return (
//         <UserContext.Provider value={{ value, handleValueChange }}>
//             <Child1 />
//             <button onClick={printValue}>Print Value</button>
//             <p>Value in parent component: {value}</p>
//         </UserContext.Provider>
//     );
// };
//
// const Child1 = () => {
//     const { handleValueChange } = useContext(UserContext);
//
//     const sendValueToParent = () => {
//         const valueToSend = 44;
//         handleValueChange(valueToSend);
//     };
//
//     return (
//         <>
//             <p>This is the child component</p>
//             <button onClick={sendValueToParent}>Send Value to Parent {value.value}</button>
//         </>
//     );
// };
//
// export default Newcontextparant;
