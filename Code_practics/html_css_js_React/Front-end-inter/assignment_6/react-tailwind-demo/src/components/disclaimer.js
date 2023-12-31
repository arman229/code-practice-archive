import { Myfooter } from "./footer"
import { Navs } from "./Navs"

export const Disclaimer=()=>{
    return(
        <>
        <Navs/>
        

<div class="container mx-auto   p-4">
    <header class="bg-gray-900 mt-2 text-white py-4">
        <div class="container mx-auto">
            <h1 class="text-3xl font-semibold px-2">Disclaimer page</h1>
        </div>
    </header>
    <div class="container mx-auto mt-2 p-4 bg-white rounded-lg shadow-lg">
    <p class="mb-4">The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>

    <p class="mb-4">In no event will we be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>

    <p class="mb-4">Through this website, you are able to link to other websites that are not under the control of our website. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>

    <p class="mb-4">Every effort is made to keep the website up and running smoothly. However, we take no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</p>
</div>
</div>

        <Myfooter/>
   

        </>
    )
}