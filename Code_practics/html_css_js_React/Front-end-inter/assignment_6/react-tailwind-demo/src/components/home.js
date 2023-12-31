import { Myfooter } from "./footer";
import {Navs} from './Navs';
import frontimage from './images/front_image.jpg'
import {Link} from "react-router-dom";

export const Myhome=()=> {
    return (


        <>






            <Navs/>


            <header class=" text-white p-4 bg-gray-600">
                <div class="container mx-auto">
                    <h1 class="text-4xl font-bold">Welcome to Our Website</h1>
                    <p class="text-lg mt-2">Your go-to source for everything you need.</p>
                </div>
            </header>


            <div class="container mx-auto mt-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="p-4 bg-white shadow-md rounded-lg">
                        <h2 class="text-2xl font-semibold">Our Mission</h2>
                        <p class="mt-4">
                            Our mission is to empower individuals with the knowledge and tools they need to enhance their online presence and become top-class developers. We're committed to delivering high-quality services that include website creation and providing educational resources to nurture the next generation of skilled developers. In addition, we're pioneering the development of AI models to push the boundaries of technology and provide innovative solutions for a variety of industries. Our mission is to create a digital landscape where every individual has the opportunity to excel and where technology is a force for positive change.</p>
                        <a href="#" class="text-blue-500 hover:underline mt-2">Learn More</a>
                    </div>
                    <div class="p-4 bg-white shadow-md rounded-lg">
                        <img src={frontimage} alt="Sample Image" class="w-full h-auto" />
                    </div>
                </div>
            </div>


            <section class="bg-gray-200 py-8">
                <div class="container mx-auto">
                    <h2 class="text-2xl font-semibold">Contact Us</h2>
                    <p class="mt-4">Have questions or need assistance? Feel free to contact us!</p>
                    <Link to="/contactus" class="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 mt-2 inline-block">Contact Us</Link>
                </div>
            </section>
            <Myfooter/>
        </>

    );
}


