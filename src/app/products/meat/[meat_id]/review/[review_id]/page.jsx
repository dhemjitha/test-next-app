import React from 'react'

function ReviewsById({params}) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Reviews {params.review_id} Page for Meat Items {params.meat_id} </h1>
    </div>
  )
}

export default ReviewsById