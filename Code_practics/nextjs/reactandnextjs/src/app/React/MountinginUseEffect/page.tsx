'use client'
import React, { useEffect, useState } from "react";

const Pages = () => {
  const [s,setvalueof]=useState(0)
  useEffect(() => {
    console.log("Component is mounted or updated");

    return () => {
      console.log("Component is about to unmount");
    };
  }, [s]);

  return(
    <>{s}
    <button onClick={()=>setvalueof(s+1)}>onclici</button>
    </>
  )
};
export default Pages;
