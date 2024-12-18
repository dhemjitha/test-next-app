import React from 'react'
import Image from 'next/image';
import next_img from "../../../public/hero.webp"

function Images() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Images Page</h1>
      <Image src={next_img} alt="Sample Next Test Image" /><br />
      <Image src={"https://images.prismic.io/turing/652ec31afbd9a45bcec81965_Top_Features_in_Next_js_13_7f9a32190f.webp?auto=format,compress"} width={1000} height={1000}/>
    </div>
  )
}

export default Images;