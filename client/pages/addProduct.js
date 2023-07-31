import React from 'react'
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
export default function addProduct() {
    const[ productInfo, setProductInfo] = useState({
        productName : "",
        productCategory: "",
        productLife:"",
        productDescription:"",
      })
      
    
      // Function to handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // Perform the necessary actions to add the product
        // For example, you can make an API call to store the product data on the server
        // Don't forget to add validation and error handling
      };

    return (
    <div className="">
      <Navbar></Navbar>

      
      <div className=" mt-3  mb-3 mx-20 px-2">

      <hr />
        <h1 className="text-3xl mt-2 mb-4">Auction Your Item</h1>
      <hr />
      </div>

      <div className="grid grid-cols-2 mx-20 gap-14">

      <div className=" ">
          <form className='my-4 ' onSubmit={ (e) =>onSubmit(e)}>
          <label className=' text-gray-600' htmlFor="productname">Product Name :</label>
          <input className='ml-14 border w-72 text-lg leading-8 rounded-md mb-6 ' name="productname" type="text" />

          <div className='mb-6'>
            <label className=' text-gray-600' htmlFor="productCategory">Product Category  :</label>  
            <select className='border rounded-md ml-9 w-72 py-2' id="cars" name="productCategory">
              <option value="Jewelery">Jewelery</option>
              <option value="Fashion">Fashion</option>
              <option value="Art">Art</option>
              <option value="Electronics">Electronics</option>
              <option value="Collectible">Collectible</option>
              <option value="Automobile">Automobile</option>
            </select>
          </div>
          <ul class="grid w-full gap-6 md:grid-cols-3">
              <li>
                  <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required/>
                  <label for="hosting-small" class="inline-flex items-center justify-between w-full p-3  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-cyan-500 peer-checked:text-cyan-500 hover:text-gray-600 hover:bg-gray-100">                           
                      <div class="block">
                         
                          <div class="w-full"> Brand new</div>
                      </div>
                      
                  </label>
              </li>
              <li>
                  <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
                  <label for="hosting-big" class="inline-flex items-center justify-between w-full p-3  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-cyan-500 peer-checked:text-cyan-500 hover:text-gray-600 hover:bg-gray-100">
                      <div class="block">
                         
                          <div class="w-full"> Second hand</div>
                      </div>
                     
                  </label>
              </li>
              <li>
                  <input type="radio" id="Refurbished" name="hosting" value="Refurbished" class="hidden peer"/>
                  <label for="Refurbished" class="inline-flex items-center justify-between w-full p-3  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-cyan-500 peer-checked:text-cyan-500 hover:text-gray-600 hover:bg-gray-100">
                      <div class="block">
                         
                          <div class="w-full"> Refurbished</div>
                      </div>
                     
                  </label>
              </li>
          </ul>
          <div className="mt-6">

            <label className=' text-gray-600' htmlFor="date"> Date :</label>
            <input className=' text-gray-600 ml-6 border rounded-md' type="date" name="date" id="date" />

          </div>
          <div className='my-6 '>
            <label className='text-gray-600 block mb-2 '> Description : </label>
            <textarea className='border resize-none rounded-md' name="description" id="description" cols="87" rows="6"></textarea>
          </div>

          

        </form>
      </div>

      <div>
        <Image className='inline mx-2 border' width ={200}  height = {200} src = "/blankImage.jpg">
          
        </Image>
        <Image className='inline mx-2 border' width ={200}  height = {200} src = "/blankImage.jpg">
          
        </Image>
        <Image className='inline mx-2 border' width ={200}  height = {200} src = "/blankImage.jpg">
          
        </Image>

        <div className='my-8 mx-2 space-x-28' >
          <label className='ml-8 text-gray-600 text-lg border p-1 rounded-md' htmlFor="imageInput1"> Choose File</label>
          <input className='hidden' type="file" name="imageInput1" id="imageInput1"  />

          <label className='text-gray-600 text-lg border p-1 rounded-md' htmlFor="imageInput2"> Choose File</label>
          <input className='hidden' type="file" name="imageInput2" id="imageInput2"  />


          <label className='text-gray-600 text-lg border p-1 rounded-md' htmlFor="imageInput3"> Choose File</label>
          <input className='hidden' type="file" name="imageInput3" id="imageInput3"  />

        </div>

        <div className='mx-3   px-4 py-6 bg-orange-50 border border-orange-100'>
         
            <div className="relative">

              <p className="text-gray-600 mx-12 mt-2">Starting Bid:</p>
                
            </div>

            <div className='flex flex-col items-center justify-center'>
            <input type="number" className="mb-4 leading-8 text-lg w-5/6 bg-white rounded-none border border-gray-400 pl-2" placeholder='$520' />

            <button type='submit' className='leading-10 text-lg rounded-none bg-cyan-700 text-white w-5/6'>List Your Item</button>
            </div>
            
              
          </div>


      </div>


      </div>

      
      
    </div>
    )
}
