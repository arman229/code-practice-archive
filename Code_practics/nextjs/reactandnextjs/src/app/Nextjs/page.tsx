'use client'
 
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import Link from 'next/link';
export default function ScrollHome() {
  const router = useRouter()
  

  const goToDashboard = () => {
 
    router.push('/Nextjs', { scroll: false });
  };
  return (<>
    <button type="button" onClick={() => router.push('/Nextjs')}>
      Dashboard
    </button>

<div>
<h1>Welcome to Next.js!</h1>
<Link href="/Nextjs#settings">Go to Dashboard Settings</Link>
<br />
<button onClick={goToDashboard}>Go to Dashboard (with scroll disabled)</button>
 
<div id="section1" style={{ height: '1000px', backgroundColor: 'lightgray' }}>
  Section 1
</div>
</div></>
  )
}