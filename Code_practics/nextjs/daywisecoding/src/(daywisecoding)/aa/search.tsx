import React from 'react';

const SearchAndCheckbox = ({searchItem, isCheckBox, handleIsCheckBox, handleSearchItemChange}) => {


    return (
        <div style={{display: 'flex', flexDirection: 'column ', alignItems: 'center', marginTop: "10px", gap: '10px'}}>
            <p>Search Items </p>

            <input type="text" name="text" value={searchItem}  onChange={(e) => handleSearchItemChange(e.target.value)}
                   placeholder="Search products"/>

            <label><input type="checkbox" name="checkbox" checked={isCheckBox}
                          onChange={(e) => handleIsCheckBox(e.target.checked)
                          }/>{' '}Only show products in stocks
            </label>
        </div>
    );
};

export default SearchAndCheckbox;

