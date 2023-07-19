import React from 'react'
import Navbar from '@/components/Navbar';

export default function product() {
  return (
    
      <div>
      <Navbar/>
      <div className=' mt-10 grid grid-cols-2 mx-44 gap-24' >
        <div>

        </div>
        <div>
          <h1 className='text-3xl'>ROLEX BRAND NEW SUBMARINER TWO TONE BLUE DIAL</h1>
          <div className='mt-4  mb-2 relative text-gray-700'>
            <p>
              Estimate $40,000 -$60,000
            </p>
              
            <div className='absolute right-0 top-0'>
              <p>
                Mar 14, 2023
              </p>
            </div>
          </div>
          <div className=' px-4 py-6 bg-orange-50 border border-orange-100'>
            <div  className='mx-10 mb-6 '>
              
              <p className=' text-gray-600 text-m'>Current Price (10 bids)</p>
              <p className='text-3xl'>$510</p>
            </div>
            <div className="relative">

              <p className="text-gray-600 mx-10 mt-2">Your Maximum Bid:</p>
              <p className='absolute top-0 right-0 text-gray-600 mx-10'> Secure</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
            <input type="number" className="mb-4 leading-8 text-lg w-5/6 bg-white rounded-none border border-gray-400" />

            <button className='leading-10 text-lg rounded-none bg-cyan-700 text-white w-5/6'>Place Your Bid</button>
            </div>
            
              <p className="text-gray-600 mx-10 mt-2">1 bidder is watching this item.</p>
          </div>
        </div>
      </div>
    </div>


  )
}
