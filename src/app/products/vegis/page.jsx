import React from "react";
import Link from "next/link";

function Vegis() {
  const vegis = [
    {
      id: 1,
      veginame: "Broccoli",
    },
    {
      id: 2,
      veginame: "Spinach",
    },
    {
      id: 3,
      veginame: "Pumpkin",
    },
    {
      id: 4,
      veginame: "Beans",
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Vegis Page</h1>

      <ul>
        {vegis.map((vegi) => {
          return(
            <li><Link href={`/products/vegis/${vegi.veginame}`}>{vegi.veginame}</Link></li>
          )
        })}
      </ul>
    </div>
  );
}

export default Vegis;
