import React, {useContext} from 'react';
import {MyCreateContext} from "@/(daywisecoding)/contexapi/mainapp";

const SearchAndCheckbox = () => {
    const {query, setQuery, stockList, setStockList} = useContext(MyCreateContext)
    return (
        <div style={{display: 'flex', flexDirection: 'column ', alignItems: 'center', marginTop: "10px", gap: '10px'}}>
            <p>Search Items </p>
            <input type="text" name="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products"/>
            <label><input type="checkbox" name="checkbox" checked={stockList} onChange={(e) => setStockList(e.target.checked)}/>{' '}Only show products in stocks
            </label>
        </div>
    );
};

export default SearchAndCheckbox;

