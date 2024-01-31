'use client'

import React, {useEffect, useState} from 'react';
import {products} from "./store";
import ProductNameandPrice from "@/app/React/filterArray/productitem";
import SearchAndCheckbox from "./search";

const MainApp = () => {
    const [query, setQuery] = useState("");
    const [showInStock, setShowInStock] = useState(false);
    const [filteredProds, setFilteredProds] = useState(products);
   
    useEffect(startFileration, [query, showInStock])

    function startFileration() {
        
        let checkFiltered = products.filter(item => showInStock ? item.stocked : true);
        const finalLIst = checkFiltered.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
        setFilteredProds(finalLIst)
    }

    const setIsCheckBoxfun = (newValue:any) => {
        setShowInStock(newValue,);

    }

    const setSearchItemfun = (value:any) => {
        setQuery(value)
    }


    return (
        <>
            <SearchAndCheckbox
                searchItem={query}
                isCheckBox={showInStock}
                handleIsCheckBox={setIsCheckBoxfun}
                handleSearchItemChange={setSearchItemfun}
            />


            {filteredProds.map((category, index) => (
                <ProductNameandPrice
                    key={index}
                    products={category}
                />
            ))}
        </>
    );
}

export default MainApp;
