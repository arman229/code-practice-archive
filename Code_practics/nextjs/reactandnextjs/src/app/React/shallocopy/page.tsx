import React from 'react';

const ShallowDeepCopy = () => {
    return (
        <>
            <h1 className={'bg-red-400'}> Shallow and Deep Copy </h1>


 <p>
            A deep copy creates a completely independent copy of the original object or array as well as all nested objects or arrays.
 </p><p>
            A shallow copy creates a new object or array, but it does not create new copies of nested objects or arrays within the original object or array. Instead, it copies references to the nested objects or arrays. Therefore, changes made to the nested objects or arrays in the copied structure will be reflected in the original structure and vice versa.
        </p>
        </>
    );
}

export default ShallowDeepCopy;