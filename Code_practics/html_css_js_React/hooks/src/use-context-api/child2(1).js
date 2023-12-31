
import { useContext } from 'react';
import UserContext from './usecontex'
const Child2_1 = () => {
    const {sharedData} = useContext(UserContext)
    return ( 
        <>
                <p>I am from Child2(1)</p>
                <p>Shared Data from Child2(2): {sharedData}</p>

        </>
     );
}
 
export default Child2_1;