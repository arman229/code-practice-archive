import { Navs } from "./Navs"
import { Myfooter } from "./footer"

export const Aboutpage=()=>{
    return(
        <>
        <Navs/>
        <div class="container mx-auto   p-4">
        <header class="bg-gray-900 mt-2 text-white py-4">
            <div class="container mx-auto">
                <h1 class="text-3xl font-semibold px-2">About Us</h1>
            </div>
        </header>
   
    <div class="container mx-auto mt-2 p-4 bg-white rounded-lg shadow-lg">
        <h2 class="text-lg font-semibold">Our Story</h2>
        <p class="mb-4">As a team of passionate front-end developers, our journey began with a shared vision to make a meaningful impact in the digital world. With a deep love for creating beautiful and functional web experiences, we set out to craft a story of innovation and creativity.

            Our journey has been marked by countless lines of code, late-night debugging sessions, and the joy of seeing our projects come to life. We've evolved from enthusiastic learners to skilled front-end developers, and our story is a testament to our dedication and continuous growth.</p>

        <h2 class="text-lg font-semibold">Our Mission</h2>
        <p class="mb-4">Our mission is to empower individuals with the knowledge and tools they need to enhance their online presence and become top-class developers. We're committed to delivering high-quality services that include website creation and providing educational resources to nurture the next generation of skilled developers.

            In addition, we're pioneering the development of AI models to push the boundaries of technology and provide innovative solutions for a variety of industries. Our mission is to create a digital landscape where every individual has the opportunity to excel and where technology is a force for positive change.</p>

        <h2 class="text-lg font-semibold">Meet Our Team</h2>
        <ul class="list-disc ml-6 mb-4">
            <li>Sir Zia Khan - Co-Founder</li>
            <li>Sir Qasim - Data scientist</li>
            <li>Danial nagori - CEO</li>
        
        </ul>

        <h2 class="text-lg font-semibold">Contact Us</h2>
        <p>If you have any questions or would like to get in touch with us, feel free to contact us at <a href="mailto:armanashraf015@gmail.com" class="text-blue-500">armanashraf015@gmail.com</a>.</p>
    </div>
    </div>
<Myfooter/>
        </>
    )
}