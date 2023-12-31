'use client'
import Script from 'next/script';
import { useRouter } from 'next/navigation'
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Link from 'next/link'
import '../styles/customstyle.css'
 

 

import {  usePathname } from 'next/navigation'
import {MyItemCart} from "@/app/components/itemcard";
import MainPage from "@/component/MainPage";
export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    const pathname =usePathname()
    const router = useRouter()

    
    return (
        <html lang="en">
        <body  >
    {/*    <button type="button" onClick={() => router.push('/dashbord')}>*/}
    {/*  Dashboard page (click me*/}
    {/*  )*/}
    {/*</button>*/}

        {/*<header className={'  flex gap-5 p-3 '}>*/}
        {/*    <div>*/}
        {/*        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href={'/'}>Home</Link></div>*/}

        {/*        <div>*/}
        {/*            <Link   className={`link ${pathname === '/dashbord' ? 'active' : ''}`}  href={'/dashbord'}>*/}
        {/*                Dashbord*/}
        {/*            </Link>*/}
        {/*            </div>*/}
        {/*            <div>*/}


        {/*                <Link  className={`link ${pathname === '/blog' ? 'active' : ''}`} href={'/blog'}>*/}
        {/*                    blog*/}
        {/*                </Link>*/}
        {/*            </div>*/}
        {/*    <div>*/}


        {/*        <Link className={`link ${pathname === '/contactus' ? 'active' : ''}`}  href={'contactus'}>*/}
        {/*            Contact Us*/}
        {/*        </Link>*/}
        {/*    </div>*/}
        {/*</header>*/}
        {/*{children}*/}


        <MainPage/>

        {/*/!*<MyItemCart/>*!/*/}
        {/*/!*<MyItemCart/>*!/*/}
        {/*<div> This is the home page</div>*/}
        {/*<Script*/}
        {/*    src="https://connect.facebook.net/en_US/sdk.js"*/}
        {/*    strategy="lazyOnload"*/}
        {/*    onLoad={() =>*/}
        {/*        console.log(`script loaded correctly, window.FB has been populated`)*/}
        {/*    }*/}
        {/*/>*/}
        {/*<footer>*/}
        {/*    <div className={'flex bg-gray-900 justify-center py-5 a '}>*/}

        {/*        &copy; {new Date().getFullYear()} . All rights reserved.*/}
        {/*    </div>*/}
        {/*</footer>*/}
        </body>
        </html>
)
}
