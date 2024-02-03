"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
function SearchParamspractics() {
  const searchParams = useSearchParams();
//http://localhost:3000/Nextjs/usingnativehistoryapi/SearchParams?value=this can be access in searchparams
  const search = searchParams.get("sort");
  return (
    <>
      <p> SearchParams {search}</p>
    </>
  );
}

export default SearchParamspractics;
