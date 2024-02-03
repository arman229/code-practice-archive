import React from 'react'
export async function generateStaticParams() {
  const names: string[] = ["zia", "zeeshan", "hira","zia", "zeeshan", "hira","zia", "zeeshan", "hira","zia", "zeeshan", "hira","zia", "zeeshan", "hira",];

  return names.map((name) => {
 return   {name: name,}
  });
}
function page({params,searchParams }:{params:{dynamictoute:string},searchParams :{id:string},}) {
  return (<div className='flex flex-col'>
    <div> my name is {params.dynamictoute} </div>
    <div> this is the serach params like ? id=pk{searchParams.id}</div>
</div>  )
}

export default page