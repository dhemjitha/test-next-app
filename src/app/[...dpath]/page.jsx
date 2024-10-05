import React from 'react'

function CatchAllRoutes(params) {
    console.log(params)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Catch All Routes Page</h1>
      <ul>
        {params.dpath.map((items) => {
            return(
                <li>{items}</li>
            )
        })}
      </ul>
    </div>
  )
}

export default CatchAllRoutes