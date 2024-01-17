import React, { useState } from 'react';
import { products } from "./store";
import ProductNameandPrice from "./productitem";
import SearchAndCheckbox from "./search";

const MainApp = () => {
    const [searchItem, setSearchItem] = useState('');
    const [isCheckBox, setIsCheckBox] = useState(true);
    const categoryWise = {};

    for (const product of products) {
        const { category } = product;
        categoryWise[category] = categoryWise[category] || [];
        categoryWise[category].push(product);
    }

// why value is not accepted
    const setIsCheckBoxfun=(value)=>setIsCheckBox(!isCheckBox)
    const setSearchItemfun=(value)=> setSearchItem(value)

    return (
        < >

            <SearchAndCheckbox
                searchItem={searchItem}
                isCheckBox={isCheckBox}
                handleIsCheckBox={setIsCheckBoxfun}
                handleSearchItemChange={setSearchItemfun}
            />

            {/* Note: Object.keys(categoryWise) returns an array of the keys of the categoryWise*/}

            {Object.keys(categoryWise).map((category, index) => (
                <ProductNameandPrice key={index} products={categoryWise[category]} categoryName={category} isCheckBox={isCheckBox} searchItem={searchItem} />
            ))}
        </>
    );
}

export default MainApp;
