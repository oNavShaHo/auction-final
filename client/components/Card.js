import React from 'react'
import Image from 'next/image'
export default function Card() {
  return (
    <div className='inline-block border-2 mx-3 my-3'>
      <Image
      className='mx-3 my-3 inline-block'
      src="/image.jpg"
      height={200}
      width={200}
      alt="pic"
    />
    <div className='text-xl'>

      <h1 className='font-thin mx-3 hover:text-cyan-600 cursor-pointer'>Lorem ipsum dolor</h1>
      <h1 className='font-thin mx-3 text-red-600 cursor-pointer'> 1 day left</h1>
      <h1 className=' mx-3 font-thin cursor-pointer'><strong className='font-semibold'>  rs 1000</strong>  <p className=' text-slate-500 inline'>(5 bids)</p></h1>
    </div>
    </div>
  )
}
