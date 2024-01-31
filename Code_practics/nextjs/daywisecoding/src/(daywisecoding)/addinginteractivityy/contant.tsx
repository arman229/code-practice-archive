import React, {useContext} from 'react';
 

const Contant = () => {
    const Data=useContext(Mycontext)
    console.log(Data.length)
    return (
        <>
            {Data.map((i,index)=>
                <div key={index}>

                    {/*<h1>{i.name}</h1>*/}
                    {/*<p></p>*/}
                    {/*{true ? (<button>show detail</button>):(<button>hidebutton </button>)}*/}
                    {/*<p>*/}
                    {/*    {i.name}*/}
                    {/*</p>*/}
                    {/*    <Image src={`/${i.url}`} alt={`Description for ${i.name}`} width={300} height={200} />*/}



                </div>
          )}


        </>
    );
}

export default Contant;