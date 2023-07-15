import React, {useEffect} from 'react'

export default function Dropdown(props) {
   
    useEffect(() => {
        
        document.getElementById("megadrop").addEventListener("mouseenter",()=>{
            props.sethover(true);
        })
        document.getElementById("megadrop").addEventListener("mouseenter",()=>{
            props.sethover(false);
        })
    })



    // if( typeof window !== null){
        
    // }


  return (
    <div id = "megadrop" className='absolute left-24'>
        <div id="mega-menu-full-cta-dropdown" className="mt-1 bg-white border-gray-200 shadow-sm border-y ">
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm md:grid-cols-3 md:px-6">
            <ul className="space-y-4 sm:mb-4 md:mb-0" aria-labelledby="mega-menu-full-cta-button">
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Online Stores
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Segmentation
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Marketing CRM
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Online Stores
                    </a>
                </li>
            </ul>
            <ul className="hidden mb-4 space-y-4 md:mb-0 sm:block">
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Our Blog
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Terms & Conditions
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        License
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Resources
                    </a>
                </li>
            </ul>
            <div className="mt-4 md:mt-0">
                <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
                <p className="mb-2 text-gray-500 dark:text-gray-400">At Flowbite, we have a portfolio of brands that cater to a variety of preferences.</p>
                <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-700">
                    Explore our brands 
                    <span className="sr-only">Explore our brands </span>
                    <svg className="w-4 h-4 ml-1" aria-hidden="true"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    </div>
    </div>
  )
}
