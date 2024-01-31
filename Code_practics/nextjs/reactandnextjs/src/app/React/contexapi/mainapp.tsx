'use client'

import React, {useEffect, useState, createContext} from 'react';
import {products, producttype} from "./store";


import ProductNameandPrices from "@/(daywisecoding)/contexapi/productitem";
import SearchAndCheckbox from "@/(daywisecoding)/contexapi/search";
import ChildComponent from "@/(daywisecoding)/contexapi/child";

interface MyCOntextType {
    myProducts: producttype[],
    setMyProducts: (prds: producttype[]) => void,
    query: string,
    setQuery: (value: string) => void,
    stockList: boolean,
    setStockList: (q: Boolean) => void
}

export const MyCreateContext = createContext<MyCOntextType>(
    {
        myProducts: products,
        setMyProducts: (prds: producttype[]) => {},
        query: "",
        setQuery: (value: string) => {
        },
        stockList: false,
        setStockList: (q: Boolean) => {}
    }
);

const MainApp = () => {
    const [myProducts, setMyProducts] = useState<producttype[]>(products);
    const [query, setQuery] = useState<string>('');
    const [stockList, setStockList] = useState<Boolean>(false);
    const startFiltration = () => {
        const filterByCheckList = products.filter((bol) => stockList ? bol.stocked : true)
        const filterByQuerySearch = filterByCheckList.filter((q) => q.name.toLowerCase().includes(query.toLowerCase()))
        setMyProducts(filterByQuerySearch)
    }

    useEffect(startFiltration, [query, stockList])
    const handleQueryChange = (q: string) => setQuery(q)
    const handlestockListChange = (q: boolean) => setStockList(q)

    const valueprovider = {
        myProducts: myProducts,
        setMyProducts: setMyProducts,
        query: query,
        setQuery: handleQueryChange,
        stockList: stockList,
        setStockList: handlestockListChange
    }

    return (
        <MyCreateContext.Provider value={valueprovider}>
            <SearchAndCheckbox/>
            <ProductNameandPrices/>
            <ChildComponent/>
        </MyCreateContext.Provider>
    );
}

export default MainApp;
