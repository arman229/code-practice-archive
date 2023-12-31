import React, {useState} from 'react';
import Image from 'next/image';


export const MyItemCart = ( ) => {
    const [quantity, setQuantity] = useState(0);

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            console.log('Decremented:', quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        console.log('Incremented:', quantity + 1);
    };


    return (
        <div className="  py-6   rounded-md shadow-md text-center"
             style={{width: '140px', height: '183px'}}>

            <div className="flex items-center justify-center space-x-4">
                <button
                    onClick={handleDecrement}
                    className="text-4xl pb-2 bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center"
                >-
                </button>
                <span className="font-semibold">{quantity}</span>
                <button
                    onClick={handleIncrement}
                    className="text-2xl pb-1 bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center"
                >+
                </button>
            </div>
        </div>
    );
};
