import React from 'react'
import Link from 'next/link'
function NestedLayoutroute() {
  return (
    <div> This is the page of  NestedLayoutroute<div>
       <Link href={'/Nextjs/layouteroute#bottom'}>Go to Main Page</Link> </div>
        </div>
  )
}

export default NestedLayoutroute