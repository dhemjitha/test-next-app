import React from 'react'
import Link from 'next/link'

function VegiItemsById({params}) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Vegi Items {params.vegi_id} Page</h1>
      <h1><Link href="/products/vegis">Back to Vegi Items Page</Link></h1>
    </div>
  )
}

export default VegiItemsById