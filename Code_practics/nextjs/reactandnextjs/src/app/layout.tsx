
'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from './Head'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [value,setValue]=useState(0)
  return (
    <html lang="en">
      <Head/>
      <body className={inter.className}>
        {/* <p>{value}</p>
        <button onClick={()=>setValue(value+1)}>increment</button>
        <Link href={'./Nextjs'}>Go to Nextjs</Link> */}
        
        {children}</body>
    </html>
  )
}
