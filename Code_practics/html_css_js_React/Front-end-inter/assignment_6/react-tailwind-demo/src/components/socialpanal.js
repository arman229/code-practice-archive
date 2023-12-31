import { Myfooter } from "./footer"
import { Navs } from "./Navs"
export const Socialpanal=()=>{
    return(
        <>
        
   <Navs/>

   <div class="max-w-md mx-auto bg-white shadow p-4 rounded-lg my-4 h-screen">
        <h2 class="text-2xl font-semibold mb-4">Connect with Us</h2>
        <div class="flex space-x-4">
            <a href="#" class="text-blue-600 hover:underline">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 15c-1.46 0-2.837-.323-4-1.08M15 8a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3a7 7 0 017 7v4a7 7 0 01-7 7h-4a7 7 0 01-7-7V10a7 7 0 017-7z"/>
                </svg>
                Twitter
            </a>
            <a href="#" class="text-blue-600 hover:underline">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 21v-7a3 3 0 013-3h6a3 3 0 013 3v7"/>
                </svg>
                Facebook
            </a>
            <a href="#" class="text-blue-600 hover:underline">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3v4a2 2 0 01-2 2H6a2 2 0 01-2-2V3M16 3l2 2m-2-2l-2 2"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21H2M12 21h7M10 9H7a2 2 0 00-2 2v6a2 2 0 002 2h3"/>
                </svg>
                Instagram
            </a>
        </div>
        <p class="mt-4">Follow us on social media to stay updated with the latest news and updates from our community. We love to connect with you!</p>
    </div>
   <Myfooter/>

        </>
    )
}