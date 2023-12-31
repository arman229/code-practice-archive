import React, { useState } from 'react';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <style>
                {`
        body {
          height: 100vh;
          margin: 0;
          display: flex;
        }
        
        .sidebar {
          width: ${isOpen ? '300px' : '20px'};
          height: 100vh;
          transition: width 0.3s ease;
          overflow-x: auto;
          overflow-y: auto;
          background-color: #f0f0f0;
          position: fixed;
          top: 0;
          left: 0;
        }

        .sidebar ul {
        position:absolute;
        top:20px;
          margin: 0;
          padding: 0;
          list-style-type: none;
        }

        .sidebar li {
          padding: 10px;
          height: 40px;
        }

        .sidebar .menu-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 999;
          width: 20px;
          height: 20px;
          background-color: #f0f0f0;
          border-radius: 50%;
          transition: background-color 0.3s ease;
        }

        .sidebar .menu-icon:hover {
          background-color: #ccc;
        }
        `}
            </style>
            <div className="sidebar">
                <div className="menu-icon" onClick={toggleSidebar}></div>
                <ul>
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                    <li>Menu Item 4</li>
                    <li>Menu Item 5</li>
                    <li>Menu Item 6</li>
                    <li>Menu Item 7</li>
                    <li>Menu Item 8</li>
                    <li>Menu Item 9</li>
                    <li>Menu Item 10</li>
                    <li>Menu Item 11</li>
                    <li>Menu Item 12</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
