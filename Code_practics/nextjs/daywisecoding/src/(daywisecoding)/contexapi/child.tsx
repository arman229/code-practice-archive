import React, {useContext} from 'react';
import {MyCreateContext} from "@/(daywisecoding)/contexapi/mainapp";

const ChildComponent = () => {
  const  {myProducts}=useContext(MyCreateContext)

    return (
        <>
           this is child component <span style={{backgroundColor:'yellow'}}>{myProducts.length>0 && (myProducts[0].name)}</span> and this is first value

        </>
    );
}

export default ChildComponent;