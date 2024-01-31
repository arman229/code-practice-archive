
import React, {useContext} from 'react';
import {MyCreateContext} from "@/(daywisecoding)/contexapi/mainapp";


const ProductNameandPrices = () => {
const {myProducts}=useContext(MyCreateContext)
    return (
        <div>
            {myProducts.map((oneitem,index)=>
                ( <div key={index}  style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <div>
                        {oneitem.stocked ? oneitem.name : <span style={{backgroundColor: 'red'}}>{oneitem.name}</span>}
                    </div>
                    <div>
                        {oneitem.price}
                    </div>
                </div>
                )
            )}


        </div>
    );
}

export default ProductNameandPrices;