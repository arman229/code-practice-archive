import { useContext, useState } from "react";
import UserContext from './usecontex'
const Child2_2 = () => {
    const [text, setText]=useState('')
    const updatedSharedData=useContext(UserContext)
   
   const handleSendData=()=>{
    updatedSharedData(text)
   }
    return ( 
        <>
                     <p>I am from Child2(2)</p>
                     <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
                    < button onClick={handleSendData}>send data </button>        </>
     );
}
 
export default Child2_2;