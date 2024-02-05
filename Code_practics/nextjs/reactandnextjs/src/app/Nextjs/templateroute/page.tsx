import React from 'react'
import Link from 'next/link'
function TemplatePage() {
  return (
    <div>
        <p>This is the page of TemplatePage   </p>
        
        <Link href={'/Nextjs/templateroute/nestedTemplateroute'} scroll={false}>Go to nested Page</Link></div>
  )
}

export default TemplatePage