import { Myfooter } from "./footer"
import { Navs } from "./Navs"

export const Privicypolicy=()=>{
    return(
        <>
        
   <Navs/>

   <div class="container mx-auto   p-4">
        <header class="bg-gray-900 mt-2 text-white py-4">
            <div class="container mx-auto">
                <h1 class="text-3xl font-semibold px-2">Privacy Policy</h1>
            </div>
        </header>
        <div class="container mx-auto mt-2 p-4 bg-white rounded-lg shadow-lg">

            <p class="mb-4">Your privacy is important to us. It is our policy to respect your privacy regarding any
                information we may collect from you across our website.</p>

            <h2 class="text-lg font-semibold">Information We Collect</h2>
            <p class="mb-4">We only ask for personal information when we truly need it to provide a service to you. We
                collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're
                collecting it and how it will be used.</p>

            <h2 class="text-lg font-semibold">Log Data</h2>
            <p class="mb-4">We want to inform you that whenever you visit our website, we collect information that your
                browser sends to us, called Log Data. This Log Data may include information such as your computer's
                Internet Protocol ("IP") address, browser version, pages of our website that you visit, the time and
                date of your visit, the time spent on those pages, and other statistics.</p>

            <h2 class="text-lg font-semibold">Cookies</h2>
            <p class="mb-4">Cookies are files with a small amount of data that are commonly used as anonymous unique
                identifiers. These are sent to your browser from the website that you visit and are stored on your
                computer's hard drive.</p>

            <h2 class="text-lg font-semibold">Changes to This Privacy Policy</h2>
            <p class="mb-4">We may update our Privacy Policy from time to time. Thus, you are advised to review this
                page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy
                on this page.</p>
        </div>
    </div>

   <Myfooter/>

        </>
    )
}