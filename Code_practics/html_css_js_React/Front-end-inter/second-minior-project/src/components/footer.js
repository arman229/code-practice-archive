import logoimage from './images/SEO Toolers logo jpeg.jpg'
import {Link} from "react-router-dom";
export const Myfooter=()=>{

    return(
        <>
        
    <footer class="    shadow bg-gray-800 text-white    text-center">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="logoimage" class="flex items-center mb-4 sm:mb-0">
                    <img src={logoimage} class="h-8 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SEO Toolers</span>
                </a>
                <ul
                    class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link to="/aboutus" target="blank" class="mr-4 text-white hover:text-gray-300  md:mr-6 ">About Us</Link>
                    </li>
                    <li>
                        <Link to="/disclaimer" target="blank" class="mr-4 text-white hover:text-gray-300 md:mr-6"> Disclaimer</Link>
                    </li>
                    <li>
                        <Link to="/seo_articles" target="blank" class="mr-4 text-white hover:text-gray-300 md:mr-6 "> Seo articles</Link>
                    </li>
                    <li>
                        <Link to="/privicypolicy" target="blank" class="text-white hover:text-gray-300">Privacy Policy</Link>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm   sm:text-center text-white hover:text-gray-300 dark:text-gray-400"> @2023  <a
                        href="https://flowbite.com/" class="text-white hover:text-gray-300">SEO Toolers™</a>. All Rights Reserved.
                </span>
                <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                     
                        <a href="https://www.facebook.com" target="_blank" class="text-gray-300 hover:text-white">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" class="text-gray-300 hover:text-white">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" class="text-gray-300 hover:text-white">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.quora.com" target="_blank" class="text-gray-300 hover:text-white">
                            <i class="fab fa-quora"></i>
                        </a>
                    </div>
                   

                
            </div>
        </div>
    </footer>

        </>
    )
}