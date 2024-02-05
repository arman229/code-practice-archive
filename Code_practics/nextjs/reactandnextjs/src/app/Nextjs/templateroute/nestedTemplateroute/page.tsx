import React from "react";
import Link from "next/link";
function NestedTemplateroute() {
  return (
    <div>
      {" "}
      NestedTemplateroute
      <div>
        <Link href={"/Nextjs/templateroute"} scroll={false}>
          Go to Main Page
        </Link>{" "}
      </div>
    </div>
  );
}

export default NestedTemplateroute;
