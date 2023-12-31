import React, { useState } from "react";
import mywebsitelogo from './images/mywebsitelogo.jpg'
import { Link } from "react-router-dom";
import { Myform } from "./form";
import './App.css'
const Navbar = () => {
 


  return (
    <div>
      <nav className="  bg-gray-800 text-white " >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4" >
          <a className="flex items-center">
            <img src={mywebsitelogo} className="h-16 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> Buyme </span>
          </a>
          <div className="flex items-center">
            <div className="mr-2">

              <Link to='/addtocart' className="fas fa-shopping-cart   text-xl"></Link>
            </div>
             


          </div>
        </div>
      </nav>
      <nav className=" head er2 bg-gray-900 text-white" >
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-6 text-lg">
              <li>
                <Link to="/" className="  dark:text-white hover:underline" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/men" className="  dark:text-white hover:underline">Men</Link>
              </li>
              <li>
                <Link to="/women" className="  dark:text-white hover:underline">Women</Link>
              </li>
              <li>
                <Link to="/kids" className="  dark:text-white hover:underline">Kids</Link>
              </li>
            </ul>
          </div>

        </div>

      </nav>




    </div>
  );
};

export default Navbar;
