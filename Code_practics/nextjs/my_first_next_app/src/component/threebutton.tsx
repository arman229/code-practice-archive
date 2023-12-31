import React, {useState} from 'react';


interface ThreeChipsProps {
    selectedChip: string;
    onSelectChip: (chip: string) => void;
}

const Tick: React.FC<void> = () => (
    <svg className={`w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);
const ThreeChips: React.FC<ThreeChipsProps> = ({selectedChip, onSelectChip}) => {


    const toggleTick = (chip: string): void => {
        onSelectChip(chip);
    };
    return (
        <div className="p-8    flex justify-center">
            <div className={`inline-flex p-2 sm:px-3 items-center rounded-lg transition duration-300 ease-in-out cursor-pointer 
  ${selectedChip === 'all' ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                 onClick={() => toggleTick('all')}>
                {selectedChip === 'all' && <Tick/>}
                <span>All</span>
            </div>
            <div className={`inline-flex  mx-2 p-2 sm:px-3 items-center rounded-lg transition duration-300 ease-in-out cursor-pointer 
  ${selectedChip === 'completed' ? 'bg-green-700 text-white hover:bg-green-800' : 'bg-green-500 text-white hover:bg-green-600'}`}
                 onClick={() => toggleTick('completed')}>
                {selectedChip === 'completed' && <Tick/>}
                <span>Completed</span>
            </div>
            <div className={`inline-flex p-2 sm:px-3 items-center rounded-lg transition duration-300 ease-in-out cursor-pointer 
  ${selectedChip === 'pending' ? 'bg-red-700 text-white hover:bg-red-800' : 'bg-red-500 text-white hover:bg-red-600'}`}
                 onClick={() => toggleTick('pending')}>
                {selectedChip === 'pending' && <Tick/>}
                <span>Pending</span>
            </div>

        </div>
    );
};

export default ThreeChips;
