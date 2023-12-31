import React, {FC} from "react";

interface ChipPropsType {
    label: string,
    onDelete: (label: string) => void
    isDarkMode:boolean

}

export const DeletableChip: FC<ChipPropsType> = ({label, onDelete,isDarkMode}) => {
    console.log('isdarkmode '+ isDarkMode)
    return (
        <div className={'p-1'}>
                    <span
                        className={` inline-flex items-center px-2 py-1 me-2 text-sm font-medium  rounded-lg ${isDarkMode ? 'text-black bg-blue-300':'bg-gray-500'}`}>{label}
                        <button type="button" onClick={() => onDelete(label)}
                                className={`inline-flex items-center p-1 ms-2 text-sm  bg-transparent rounded-sm   ${isDarkMode ? 'hover:bg-blue-400 hover:text-black':'hover:bg-gray-600 hover:text-white'}`}>
                  <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 14 14">
                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                       d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                 </svg>
                 </button>
                 </span>

        </div>
    )
}