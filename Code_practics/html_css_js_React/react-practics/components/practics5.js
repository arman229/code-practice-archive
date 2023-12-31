// import {useState} from "react";
// import {validateEmail} from "../src/utils";
//
// const PasswordErrorMessage = () => {
//     return (
//         <p className="FieldError">Password should have at least 8 characters</p>
//     );
// };
//
// function Appq() {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState({
//         value: "",
//         isTouched: false,
//     });
//     const [role, setRole] = useState("role");
//
//     const getIsFormValid = () => {
//         return (
//             firstName &&
//             validateEmail(email) &&
//             password.value.length >= 8 &&
//             role !== "role"
//         );
//     };
//
//     const clearForm = () => {
//         setFirstName("");
//         setLastName("");
//         setEmail("");
//         setPassword({
//             value: "",
//             isTouched: false,
//         });
//         setRole("role");
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("Account created!");
//         clearForm();
//     };
//
//     return (
//         <div className="App">
//             <form onSubmit={handleSubmit}>
//                 <fieldset>
//                     <h2>Sign Up</h2>
//                     <div className="Field">
//                         <label>
//                             First name <sup>*</sup>
//                         </label>
//                         <input
//                             value={firstName}
//                             onChange={(e) => {
//                                 setFirstName(e.target.value);
//                             }}
//                             placeholder="First name"
//                         />
//                     </div>
//                     <div className="Field">
//                         <label>Last name</label>
//                         <input
//                             value={lastName}
//                             onChange={(e) => {
//                                 setLastName(e.target.value);
//                             }}
//                             placeholder="Last name"
//                         />
//                     </div>
//                     <div className="Field">
//                         <label>
//                             Email address <sup>*</sup>
//                         </label>
//                         <input
//                             value={email}
//                             onChange={(e) => {
//                                 setEmail(e.target.value);
//                             }}
//                             placeholder="Email address"
//                         />
//                     </div>
//                     <div className="Field">
//                         <label>
//                             Password <sup>*</sup>
//                         </label>
//                         <input
//                             value={password.value}
//                             type="password"
//                             onChange={(e) => {
//                                 setPassword({ ...password, value: e.target.value });
//                             }}
//                             onBlur={() => {
//                                 setPassword({ ...password, isTouched: true });
//                             }}
//                             placeholder="Password"
//                         />
//                         {password.isTouched && password.value.length < 8 ? (
//                             <PasswordErrorMessage />
//                         ) : null}
//                     </div>
//                     <div className="Field">
//                         <label>
//                             Role <sup>*</sup>
//                         </label>
//                         <select value={role} onChange={(e) => setRole(e.target.value)}>
//                             <option value="role">Role</option>
//                             <option value="individual">Individual</option>
//                             <option value="business">Business</option>
//                         </select>
//                     </div>
//                     <button type="submit" disabled={!getIsFormValid()}>
//                         Create account
//                     </button>
//                 </fieldset>
//             </form>
//         </div>
//     );
// }
//
// export default Appq;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import React, {createContext, useContext, useState} from "react";
// // import {TextField, Typography} from "@mui/material";
// // import {Child1} from "./contextpractics";
// //
// // export const NameContext = createContext({})
// // export default function FirstComponent() {
// //     const [input, setInput] = useState('')
// //     const age = 2312
// //     const onAgeClick=()=>{
// //         console.log("onAgeClick")
// //     }
// //     return (
// //         <>
// //             <NameContext.Provider value={{input, age,onAgeClick}}>
// //                 <TextField value={input} onChange={(e) => setInput(e.target.value)}/>
// //                 <Typography variant={"h1"}>{input}</Typography>
// //                 <Child1/>
// //             </NameContext.Provider>
// //
// //         </>
// //
// //     )
// // }
// //
// //
// // import { useState } from "react";
// //
// // export default function Appa() {
// //     const [greeting, setGreeting] = useState({ greet: "Hello, World" });
// //     console.log({ greet: "Hello, Worsssssssssssssld" } );
// //
// //     function updateGreeting() {
// //         const newGreeting =   greeting  ;
// //         console.log({ ...greeting });
// //         console.log( greeting );
// //         newGreeting.greet = "Hello, World-Wssside Web";
// //         setGreeting(newGreeting);
// //     }
// //
// //     return (
// //         <div>
// //             <h1>{greeting.greet}</h1>
// //             <button onClick={updateGreeting}>Update greeting</button>
// //         </div>
// //     );
// // }
