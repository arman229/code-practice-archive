import React from 'react';
import mywebsitelogo from './images/mywebsitelogo.jpg'
 
import { Link } from "react-router-dom";
export function MyFooter() {
  return (
    <footer  className="  bg-gray-800 text-white ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div className="lg:flex lg:justify-between ">
          <div className="mb-6 lg:mb-0">
            <a className="flex items-center">
              <img src={mywebsitelogo} className="h-16 mr-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Buyme</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
            <div  >
              <h2 className="mb-6 text-sm font-semibold v uppercase ">Resources</h2>
              <ul className="  font-medium">
                <li className="m-2"   >
                  <Link to="/"  className="hover:underline" >Home</Link>
                </li>
                <li className="m-2">
                  <Link to="/women" className="hover:underline">Women</Link>
                </li>
                <li className="m-2">
                  <Link to="/men" className="hover:underline">Men</Link>
                </li>
                <li className="m-2">
                  <Link to="/kids" className="hover:underline">Kids</Link>
                </li>
                <li className="m-2">
                  <Link to="/contactus" className="hover:underline">Contact us</Link>
                </li>
              </ul>
            </div  >
            <div>
              <h2 className="mb-6 text-sm font-semibold   uppercase dark:text-white">Follow Us</h2>
              <ul className="  font-medium">
                <li className="m-2">
                  <i className="fab fa-facebook"></i> <a href="https://www.facebook.com/your-facebook" className="hover:underline">Facebook</a>
                </li>
                <li className="m-2">
                  <i className="fab fa-instagram"></i> <a href="https://www.instagram.com/your-instagram" className="hover:underline">Instagram</a>
                </li>
                <li className="m-2">
                  <i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/your-linkedin" className="hover:underline">LinkedIn</a>
                </li>
                <li className="m-2">
                  <i className="fab fa-twitter"></i> <a href="https://twitter.com/your-twitter" className="hover:underline">Twitter</a>
                </li>
              </ul>
            </div>



            <div className=''  >
              <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-white">Helpline</h2>
              <ul className="  font-medium">
                <li className="m-2">
                  <i className="fas fa-phone p-1"></i> <a href="tel:+9696552127" className="hover:underline">+96 96552127</a>
                </li>
                <li className="m-2">
                  <i className="fas fa-envelope p-1"></i> <a href="mailto:johan@gmail.com" className="hover:underline">jo@gmail.com</a>
                </li>
                <li className="m-2">
                  <i className="fas fa-map-marker-alt p-1"></i> <a href="https://tailwindcss.com/" className="hover:underline"> Swat,Pakistan</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm  text-center  ">
          &copy; 2023 <a href="/" className="hover:underline">Copyright&trade;</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
