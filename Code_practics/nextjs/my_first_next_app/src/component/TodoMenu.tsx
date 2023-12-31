
'use client'
import React, { useState, useRef, useEffect, MouseEvent } from 'react';
interface todomenutype {
    onEditItem: () => void;
    onDeleteItem: () => void }
const TodoMenu: React.FC<todomenutype> = ({ onEditItem, onDeleteItem }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement | null>(null);
    const todoMenuRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside: EventListener = (event: Event) => {
        if (
            todoMenuRef.current &&
            !todoMenuRef.current.contains(event.target as Node) &&
            menuButtonRef.current &&
            !menuButtonRef.current.contains(event.target as Node)
        ) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleMenuButtonClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleItemClick = (item: string) => {

        if (item === 'Edit') {
            onEditItem();
        } else if (item === 'Delete') {
            onDeleteItem();
        }
        setMenuOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>



                <button ref={menuButtonRef}   onClick={handleMenuButtonClick}
                        className="inline-flex items-center p-2 text-sm font-medium text-center   rounded-lg text-black bg-blue-300 hover:bg-blue-600     dark:text-white dark:bg-gray-900 dark:hover:bg-[#091319]  "
                        type="button">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                         viewBox="0 0 4 15">
                        <path
                            d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                    </svg>
                </button>
            </div>

            <div
                ref={todoMenuRef}
                className={`menu origin-top-right absolute right-0 mt-1.5 w-24 rounded-lg shadow-lg  bg-gray-300 dark:bg-gray-700   ${isMenuOpen ? 'block' : 'hidden'}`}
            >
                <div className="py-1 ">
                    <div className=" cursor-pointer block px-4 py-2 text-sm  text-black bg-gray-300 hover:bg-gray-400    dark:text-white dark:bg-gray-700 dark:hover:bg-[#091319] " onClick={() => handleItemClick('Edit')}>
                        Edit
                    </div>
                    <div className=" cursor-pointer block px-4 py-2 text-sm  text-black bg-gray-300 hover:bg-gray-400  dark:text-white dark:bg-gray-700 dark:hover:bg-[#091319] " onClick={() => handleItemClick('Delete')}>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
};

export { TodoMenu };
