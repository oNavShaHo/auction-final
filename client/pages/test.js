import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';


export default function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  // Add more states for other product attributes as needed

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
      
      <div className=" mt-5 mb-10 mx-20 px-2">
        <hr />
        <h1 className="text-3xl mt-2 mb-4">Auction Your Item</h1>
        <hr />

        <form className='my-4 ' onSubmit={ (e) =>onSubmit(e)}>
          <label className='block text-gray-600' htmlFor="productname">Product Name</label>
          <input className=' block border w-2/6 text-lg leading-8 rounded-md mb-6' name="productname" type="text" />

          <div className='mb-6'>
            <label className=' text-gray-600' htmlFor="productCategory">Product Category  :</label>  
            <select className='border rounded-md ml-9 w-72' id="cars" name="productCategory">
              <option value="ewelery">Jewelery</option>
              <option value="Fashion">Fashion</option>
              <option value="Art">Art</option>
              <option value="Electronics">Electronics</option>
              <option value="Collectible">Collectible</option>
              <option value="Automobile">Automobile</option>
            </select>
          </div>
          <ul class="grid w-1/2 gap-6 md:grid-cols-3">
              <li>
                  <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required/>
                  <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">                           
                      <div class="block">
                         
                          <div class="w-full"> Brand new</div>
                      </div>
                      
                  </label>
              </li>
              <li>
                  <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
                  <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                      <div class="block">
                         
                          <div class="w-full"> Second hand</div>
                      </div>
                     
                  </label>
              </li>
              <li>
                  <input type="radio" id="Refurbished" name="hosting" value="Refurbished" class="hidden peer"/>
                  <label for="Refurbished" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                      <div class="block">
                         
                          <div class="w-full"> Refurbished</div>
                      </div>
                     
                  </label>
              </li>
          </ul>

        </form>
      </div>
    </div>
  );
}
