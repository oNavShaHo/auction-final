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
        
    </div>
  );
}
