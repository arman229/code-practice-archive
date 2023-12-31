import { Myfooter } from "./footer"
import {Link} from "react-router-dom";
import { Navs } from "./Navs"
export const Signup=()=>{
    return(
        <>
        
   <Navs/>

   <div class="container mx-auto mt-8">
        <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Sign Up</h2>
            <form>
                <div class="mb-4">
                    <label for="name" class="block text-gray-600">Name</label>
                    <input type="text" id="name" name="name" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" required />
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-600">Email</label>
                    <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" required />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-600">Password</label>
                    <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" required />
                </div>
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Sign Up</button>
                <p class="mt-2 text-sm text-gray-600">Already have an account? <Link to="/signin" class="text-blue-500 hover:underline">Sign in</Link></p>
            </form>
        </div>
    </div>
   <Myfooter/>

        </>
    )
}