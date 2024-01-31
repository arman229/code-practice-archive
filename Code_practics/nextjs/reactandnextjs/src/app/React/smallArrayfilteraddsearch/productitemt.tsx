import React from 'react';
import {products} from "./store";

const ProductNameandPrice = ({ products, }) => {

    return (
        <>

                <div key={products.id} style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <div>
                        {products.stocked ? products.name : <span style={{backgroundColor: 'red'}}>{products.name}</span>}
                    </div>
                    <div>
                        {products.price}
                    </div>
                </div>

        </>
    );
}

export default ProductNameandPrice;