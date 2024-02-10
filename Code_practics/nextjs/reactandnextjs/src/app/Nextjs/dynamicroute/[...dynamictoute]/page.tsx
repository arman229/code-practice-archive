import React from 'react'
export async function generateStaticParams() {
  const names: string[] = ["zia", "zeeshan", "hira","zia", "zeeshan", "hira","zia", "zeeshan", "hira","zia", "zeeshan", "hira","zia", "zeeshan", "hira",];

  return names.map((name) => {
 return   {name: name,}
  });
}
function page({params,searchParams }:{params:{dynamictoute:string},searchParams :{id:string},}) {
 
  const links = [
    { id: 1, url: 'https://example.com', text: 'Example Website' },
    { id: 2, url: 'https://another-example.com', text: 'Another Example' },
    { id: 3, url: 'https://yet-another-example.com', text: 'Yet Another Example' },
  ];
 return (<div className='flex flex-col'>
    <div> my name is {params.dynamictoute} </div>
    <div> this is the serach params like ? id=pk{searchParams.id}</div>

    {links.map(link => {}
          <li key={link.id}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
</div>  )
}

export default page


// function DynamicRoute({params,searchParams}:{params:{dynamictoute:string},searchParams:{id:string}}) {
//   return (
//     <div>

//       <h1>DynamicRoute</h1>
//       <p>My name is {params.dynamictoute}and search params is {searchParams.id}</p>

//     </div>
//   )
// }

// export default DynamicRoute