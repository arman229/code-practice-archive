'use client'
 
import { usePathname } from 'next/navigation'
 
export default function LocaleSwitcher() {
  const pathname = usePathname()
 console.log('pathname',pathname)
  function switchLocale(locale: string) {
    // e.g. '/en/about' or '/fr/contact'
    const newPath = `/${locale}${pathname}`
    const stateObject = { data: 'exampleStateData' }; // Example state object
    const newTitle = 'New Page Title'; // Example new title
    
    window.history.replaceState(stateObject, newTitle, newPath);
    
  }
 
  return (
    <>
      <button onClick={() => switchLocale('en')}>English</button>
      <button onClick={() => switchLocale('fr')}>French</button>
    </>
  )
}