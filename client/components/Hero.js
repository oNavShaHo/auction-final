import React, { useState } from 'react';
import Flowbite from './Flowbite';

export default function Hero() {
  
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleMouseEnter = (event) => {
    event.target.classList.add('underline');
    setButtonHovered(true);
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove('underline');
    setButtonHovered(false);
  };


  return (
    <div className='relative z-0'>
      <ul className='flex  mx-20 px-3'>
        <li className="droplist my-3 pr-3 cursor-pointer"  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>     Electronics
        </li>
        <li className="droplist my-3 px-3 cursor-pointer"  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>     Fashion
        </li>
        <li className="droplist my-3 px-3 cursor-pointer"  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>     Luxury
        </li>
        <li className="droplist my-3 px-3 cursor-pointer"  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>     Collectibles
        </li>
        <li className="droplist my-3 px-3 cursor-pointer"  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>     Art
        </li>
      </ul>
      {buttonHovered && <Flowbite/>}
    </div>
  )
}
