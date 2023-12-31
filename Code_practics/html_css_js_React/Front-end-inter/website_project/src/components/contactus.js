import Navbar from "./navbar"
import { MyFooter } from "./footer"
import frontimage from './images/shoes.jpeg'

export const Contactus = () => {
    return (
        <>
            <Navbar />
       

            <div class="container w-84 mx-auto   p-4">
                <header class="bg-gray-900 mt-2 text-white py-4">
                    <div class="container mx-auto">
                        <h1 class="text-3xl font-semibold px-2">Contact Us</h1>
                    </div>
                </header>

                <div class="container mx-auto mt-2 p-4 bg-white rounded-lg shadow-lg">
                    <h2 class="text-lg font-semibold">Get in Touch</h2>
                    <p class="mb-4">We'd love to hear from you. Please use the form below to send us your message.</p>


                    <form>
                        <div class="mb-4">
                            <label for="name" class="block font-medium text-gray-700">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Please Enter Your Name" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400" required />
                        </div>

                        <div class="mb-4">
                            <label for="email" class="block font-medium text-gray-700">Your Email</label>
                            <input type="email" id="email" name="email" placeholder="Please Enter Your Email" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400" required />
                        </div>

                        <div class="mb-4">
                            <label for="message" class="block font-medium text-gray-700" >Message</label>
                            <textarea id="message" name="message" placeholder="Write a message " rows="5" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400" required></textarea>
                        </div>

                        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Send Message</button>
                    </form>
                </div>
            </div>
            <MyFooter />
        </>
    )
}