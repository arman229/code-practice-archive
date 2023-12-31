// import React, { createContext, useState } from 'react';
// import { Button, Typography } from "@mui/material";
// import { Childcomponentspractics } from "./childcomponentspractics";
//
// const usercontext = createContext('');
//
// const Parent = () => {
//     const [recivedata, setvalue] = useState('');
//
//     const recivedataa = (val) => {
//
//         setvalue(val)
//
//
//     }
//
//     return (
//         <usercontext.Provider value={{ recivedata:recivedataa }}>
//             <Typography variant={"title"}>This is the parent component which is used to receive data from the child component</Typography>
//             <Button onClick={recivedataa}>Data Receive </Button>
//             <p> print the string {value}</p>
//             <Childcomponentspractics   />
//         </usercontext.Provider>
//     );
// }
//
// export { Parent, usercontext };
