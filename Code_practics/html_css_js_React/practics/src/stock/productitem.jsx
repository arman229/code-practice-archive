import React from 'react';
import {products} from "./store";

const ProductNameandPrice = ({searchItem, products, categoryName, isCheckBox}) => {
    const filteredProducts = products.filter(item => isCheckBox ? item.stocked : true);
    const searchedProducts = filteredProducts.filter(item =>
        item.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    return (
        <>
            <p style={{background: 'blue', textAlign: 'center', color: "white", fontSize: '2rem'}}>{categoryName}</p>
            {searchedProducts.map((item) => (
                <div key={item.id} style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <div>
                        {item.stocked ? item.name : <span style={{backgroundColor: 'red'}}>{item.name}</span>}
                    </div>
                    <div>
                        {item.price}
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProductNameandPrice;