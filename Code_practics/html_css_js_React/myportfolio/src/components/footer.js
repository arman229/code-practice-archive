
import React from "react";

const Myfooter=()=>{
    return(
        <>
            <div  >
                <img style={{ minHeight: "200px", maxHeight: "550px", width: "100%" }}
                     src="https://www.w3schools.com/w3images/map.jpg" alt="" />
            </div>
        <div>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' , color:"black"}}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href="https://portfolio-arman.netlify.app">
                     www.portfolio-arman.netlify.app
                </a>

            </div>

        < /div>

        </>
    )
}
export  {Myfooter}