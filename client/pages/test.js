import React from 'react'
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link'
export default function test() {
  return (
    <div>
      <Navbar/>
      <div className=' mt-10 grid grid-cols-2 mx-44 gap-24' >
        <div>
          <Image
          src="/rolex.webp"
          width={500}
          height={500}
          alt="Picture of the author"
          className='border'>
          
          </Image>
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
                <svg  className = "absolute top-2 right-24  h-3" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
              <p className='absolute top-0 right-0 text-gray-600 mx-10'> Secure</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
            <input type="number" className="mb-4 leading-8 text-lg w-5/6 bg-white rounded-none border border-gray-400 pl-2" placeholder='$520' />

            <button className='leading-10 text-lg rounded-none bg-cyan-700 text-white w-5/6'>Place Your Bid</button>
            </div>
            
              <p className="text-gray-600 mx-10 mt-2">1 bidder is watching this item.</p>
          </div>

          <div className='my-6  mb-2 relative text-gray-700'>
            <p>
              Get approved to bid.
            </p>
              
            <div className='absolute left-36  ml-2 top-0'>
              <Link className='text-cyan-700 hover:underline hover:decoration-cyan-600 hover:text-cyan-600' href="/test">Register for Auction</Link>
            </div>
          </div>
          <hr className='my-6'/>
          <p className='text-black font-semibold mb-2'>Shipping & Pickup Options</p>
          <p className='my-2 relative pl-8'>
            <svg className = "absolute top-1 left-0" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
            </svg>
            Free shipping in India.
          </p>
          <p className='relative pl-8'>
            <svg className='absolute top-1 left-0' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
            Ships from New York, NY, United States</p>
          
        </div>
      </div>  
    </div>
  )
}
