import React from 'react'

export default function Hero() {
 


  return (
    <nav>
      <ul className='flex items-center pl-20'>
        <li className='relative group px-3 py-3'>
            <button className='opacity-70 hover:opacity-80  group-hover:underline group-hover:decoration-gray-600'>Electronics</button>
            <div className="invisible absolute opacity-0 my-5  bg-neutral-50 group-hover:opacity-100 group-hover:visible duration-500 min-w-[560px]">
                <div className='grid grid-cols-2'>
                  <div>
                    <p className=' pl-2 py-1 tracking-wide text-gray-600'> mobilephones</p>
                    <p className=' pl-2 py-1 tracking-wide text-gray-600'> mobilephones</p>
                    <p className=' pl-2 py-1 tracking-wide text-gray-600'> mobilephones</p>
                    <p className=' pl-2 py-1 tracking-wide text-gray-600'> mobilephones</p>
                    <p className=' pl-2 py-1 tracking-wide text-gray-600'> mobilephones</p>
                  </div>
                  <div>
                    <p className='py-1 tracking-wide text-gray-600'> mobilephones</p>
                    <p className='py-1 tracking-wide text-gray-600'> mobilephones</p>
                    <p className='py-1 tracking-wide text-gray-600'> mobilephones</p>
                    <p className='py-1 tracking-wide text-gray-600'> mobilephones</p>
                    <p className='py-1 tracking-wide text-gray-600'> mobilephones</p>
                  </div>
                </div>
            </div>
        </li>
        <li className='relative group px-3 py-3'>
            <button className='opacity-70 hover:opacity-80  hover:underline hover:decoration-gray-600'>Fashion</button>
            <div className="invisible absolute opacity-0 my-5  bg-neutral-50 group-hover:opacity-100 group-hover:visible duration-500 min-w-[560px]">
                <div className='grid grid-cols-2 gap-2'>
                  <div>
                    <p className=' px-1 py-1 tracking-wide text-gray-600'> mobilephones</p>
                  </div>
                </div>
            </div>
        </li>
        <li className='relative group px-3 py-3'>
            <button className='opacity-70 hover:opacity-80  hover:underline hover:decoration-gray-600'>Luxury</button>
            <div className="invisible absolute opacity-0 my-5  bg-neutral-50 group-hover:opacity-100 group-hover:visible duration-500 min-w-[560px]">
                <div className='grid grid-cols-2 gap-2'>
                  <div>
                    <p className=' px-1 py-1 tracking-wide text-gray-600'> mobilephones</p>
                    <p className=' px-1 py-1 tracking-wide text-gray-600'> mobilephones</p>
                    <p className=' px-1 py-1 tracking-wide text-gray-600'> mobilephones</p>
                    <p className=' px-1 py-1 tracking-wide text-gray-600'> mobilephones</p>
                    <p className=' px-1 py-1 tracking-wide text-gray-600'> mobilephones</p>
                  </div>
                </div>
            </div>
        </li>
        <li className='relative group px-3 py-3' >
            <button className='opacity-70 hover:opacity-80  hover:underline hover:decoration-gray-600'>Art</button>
            <div className="invisible absolute opacity-0 my-5  bg-neutral-50 group-hover:opacity-100 group-hover:visible duration-500 min-w-[560px]">
                <div className='grid grid-cols-2 gap-2'>
                  <div>
                    <p className=' px-1 py-1 tracking-wide text-gray-600'> mobilephones</p>
                  </div>
                </div>
            </div>
        </li>
      </ul>
    </nav>
  )
}
