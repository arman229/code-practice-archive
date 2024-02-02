/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async ()=>{
        return[
            {
                source:'/Nextjs/redirectfunction',
                destination:'/',
                permanent:false,
            }
        ]
    }
};

export default nextConfig;
