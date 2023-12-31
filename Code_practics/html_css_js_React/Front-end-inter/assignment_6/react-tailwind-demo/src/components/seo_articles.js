import { Myfooter } from "./footer"
import { Navs } from "./Navs"
export const Seo_articles=()=>{
    return(
        <>
        
   <Navs/>

   <div class="container mx-auto   p-4">
        <header class="bg-gray-900 mt-2 text-white py-4">
            <div class="container mx-auto">
                <h1 class="text-3xl font-semibold px-2">SEO Articles Blog</h1>
            </div>
        </header>



        <div class="container mx-auto mt-2 p-4 bg-white rounded-lg shadow-lg">
            
            <article class="mb-8">
                <h2 class="text-2xl font-semibold">How to Optimize Your Website for Search Engines</h2>
                <p class="text-gray-600 mb-2">Published on <time datetime="2023-10-30">October 30, 2023</time></p>
                <p class="mb-4">In this SEO article, we'll guide you through the process of optimizing your website
                    for search engines. We'll cover on-page and off-page SEO techniques, keyword research, and more
                    to help you improve your website's search engine ranking. Whether you're a beginner or an
                    experienced webmaster, this article will provide valuable insights into SEO best practices.</p>
                <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target={"blank"} class="text-blue-500 hover:underline">Read More</a>
            </article>
 
            <article class="mb-8">
                <h2 class="text-2xl font-semibold">The Importance of Quality Backlinks in SEO</h2>
                <p class="text-gray-600 mb-2">Published on <time datetime="2023-10-25">October 25, 2023</time></p>
                <p class="mb-4">Backlinks are a crucial part of SEO. In this article, we'll explore the significance
                    of quality backlinks in boosting your website's search engine rankings. Learn how to acquire
                    high-quality backlinks and avoid common link-building pitfalls.</p>
                <a href="https://mailchimp.com/resources/what-is-backlinking-and-why-is-it-important-for-seo/#:~:text=If%20you%20know%20only%20little,traffic%20coming%20to%20your%20website." class="text-blue-500 hover:underline">Read More</a>
            </article>
        </div>
    </div>
   <Myfooter/>

        </>
    )
}